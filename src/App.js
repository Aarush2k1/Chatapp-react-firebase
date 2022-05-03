/* eslint-disable no-const-assign */
import React, { useState, useEffect } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

import db, { auth } from "./services/firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  const [rooms, setRooms] = useState([]);
  const [isRoomExist, setIsRoomExist] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setLoading(true);

        db.collection("chats")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setRooms(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            )
          );

        if (authUser.isAnonymous === true && authUser.displayName === null) {
          var anonymousName =
            "Anonymous" + " " + Math.floor(Math.random() * 1000000);

          auth.currentUser.updateProfile({
            displayName: anonymousName,
            photoURL: "",
          });

          db.collection("users")
            .doc(authUser.uid)
            .set({
              name: anonymousName,
              about: "Hey there! I am using WhatsApp.",
              photoURL: "",
              role: "anonymous",
              dateJoined: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(function () {
              console.log("Document successfully updated!");
            })
            .catch(function (error) {
              console.error("Error updating document: ", error);
            });
        }

        if (
          authUser.uid &&
          authUser.isAnonymous === false &&
          authUser.photoURL !== null
        ) {
          const errorAbout = "errorAbout";
          db.collection("users")
            .doc(authUser.uid)
            .get()
            .then(function (doc) {
              if (doc.exists) {
                console.log("USER EXIST");
              } else {
                db.collection("users").doc(authUser.uid).set({
                  name: authUser.displayName,
                  about: "Hey there! I am using WhatsApp.",
                  photoURL: user.photoURL,
                  role: "regular",
                  dateJoined: firebase.firestore.FieldValue.serverTimestamp(),
                });
              }
            })
            .catch(function (error) {
              alert(`${error}`, errorAbout, "top-center");
            });
        } else if (
          authUser.uid &&
          authUser.isAnonymous === false &&
          authUser.photoURL === null
        ) {
          const errorAbout = "errorAbout";
          db.collection("users")
            .doc(authUser.uid)
            .get()
            .then(function (doc) {
              if (doc.exists) {
                console.log("USER EXIST");
              } else {
                db.collection("users").doc(authUser.uid).set({
                  name: authUser.displayName,
                  about: "Hey there! I am using WhatsApp.",
                  photoURL: "",
                  role: "regular",
                  dateJoined: firebase.firestore.FieldValue.serverTimestamp(),
                });
              }
            })
            .catch(function (error) {
              alert(`${error}`, errorAbout, "top-center");
            });
        }
      } else {
        setLoading(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <>
      {!user ? (
        <Home />
      ) : (
        <div className="app">
          <div className="app_body">
            <Sidebar
              rooms={rooms}
              setIsRoomExist={setIsRoomExist}
              isRoomExist={isRoomExist}
            />
            <Switch>
              <Route exact path="/chats/:chatsId">
                <Chat isRoomexist={isRoomExist} />
              </Route>
              <Route exact path="/">
                <Chat isRoomexist={isRoomExist} />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
