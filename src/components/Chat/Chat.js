import React, { useEffect, useState, useRef } from "react";
import "./Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import DoneIcon from "@material-ui/icons/Done";
import AlarmIcon from "@material-ui/icons/Alarm";

import { useParams } from "react-router";
import db, { auth } from "../../services/firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatLandingScreen from "./ChatLandingScreen";
import ChatHeader from "./ChatHeader";
import { Drawer, Hidden } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CloseIcon from "@material-ui/icons/Close";
import TooltipCustom from "../TooltipCustom";
// import "emoji-mart/css/emoji-mart.css";
// import { Picker } from "emoji-mart";

function Chat({ isRoomExist }) {
  const messagesEndRef = useRef(null);
  const [input, setInput] = useState("");
  const { chatsId } = useParams();

  const [user] = useAuthState(auth);
  const [emoji, setEmoji] = useState(false);
  const [chatName, setChatName] = useState("");
  const [_chatId, _setChatId] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [showLandingScreenPhoto, setShowLandingScreenPhoto] = useState(false);

  const attachFile = () => {
    alert(
      "All icons have the same functions, you can only upload images, gifs and videos!"
    );
  };
  useEffect(() => {
    if (chatsId != null) {
      db.collection("chats")
        .doc(chatsId)
        .onSnapshot(function (doc) {
          setChatName(doc.data()?.name);
          _setChatId(doc.data()?.id);
        });
      db.collection("chats")
        .doc(chatsId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMsgs(snapshot.docs.map((doc) => doc.data()))
        );
      setShowLandingScreenPhoto(false);
    } else {
      setShowLandingScreenPhoto(true);
    }
  }, [chatsId]);

  const sendMsg = (e) => {
    e.preventDefault();
    console.log("You typed>>>>", input);
    db.collection("chats")
      .doc(chatsId)
      .collection("messages")
      .add({
        message: input,
        name: user.displayName,
        uid: user.uid,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function (docRef) {
        db.collection("chats")
          .doc(chatsId)
          .collection("messages")
          .doc(docRef.id)
          .set(
            {
              id: docRef.id,
            },
            { merge: true }
          );
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    setInput("");
  };

  const addEmoji = (e) => {
    let emoji = e.native;
    setInput(input + emoji);
  };

  const handleEmoticons = () => {
    setEmoji(true);
  };

  const handleEmoticonsClose = () => {
    setEmoji(false);
  };

  const voiceMessage = () => {
    const voiceMessageToastId = "voiceMessage";
    alert(
      "Voice Message is not yet available!",
      voiceMessageToastId,
      "top-center"
    );
  };

  return (
    <div className="chat">
      {chatsId ? (
        <>
          <ChatHeader
            chatName={chatName}
            chatsId={chatsId}
            _chatId={_chatId}
            msgs={msgs}
            db={db}
            isRoomExist={isRoomExist}
          />
          <div className="chat_body">
            {msgs.map((msg) => (
              <div
                key={msg.id}
                className={`chat_message ${
                  msg.name === user.displayName && "chat_reciever"
                }`}
              >
                <span
                  className={`chat_name ${
                    msg.uid === user.uid && "chat_name_sender"
                  }`}
                >
                  {msg.name}
                </span>
                <div className="chat_message_box">
                  <div
                    className={`chat_message_box_text ${
                      msg.uid === user.uid && "chat_message_box_text_sender"
                    }`}
                  >
                    {msg.message ? msg.message : null}
                    <div
                      className={`chat_timestamp_container ${
                        msg.uid === user.uid &&
                        "chat_timestamp_container_sender"
                      }`}
                    >
                      {msg.timestamp ? (
                        <div className={`chat_timestamp `}>
                          <span>
                            {new Date(
                              msg.timestamp.toDate()
                            ).toLocaleTimeString("en-US", {
                              hour: "numeric",
                              hour12: true,
                              minute: "numeric",
                            })}
                            {msg.uid === user.uid ? (
                              <>
                                <DoneIcon />
                              </>
                            ) : null}
                          </span>
                        </div>
                      ) : (
                        <div className="chat_timestamp">
                          <span>
                            {new Date().toLocaleTimeString("en-US", {
                              hour: "numeric",
                              hour12: true,
                              minute: "numeric",
                            })}
                            {msg.uid === user.uid ? <AlarmIcon /> : null}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat_footer">
            <Drawer />
            {emoji ? (
              <Hidden only={["xs"]}>
                <TooltipCustom
                  name="Close"
                  icon={<CloseIcon />}
                  onClick={() => handleEmoticonsClose()}
                />
              </Hidden>
            ) : null}
            <TooltipCustom
              name="Emoticons"
              icon={<InsertEmoticonIcon />}
              onClick={() => handleEmoticons()}
            />

            {/* {emoji ? (
              <>
                <Hidden only={["xs"]}>
                  <Picker onSelect={addEmoji} />
                </Hidden>
                <Hidden smUp>
                  <ClickAwayListener onClickAway={handleEmoticonsClose}>
                    <Picker onSelect={addEmoji} />
                  </ClickAwayListener>
                </Hidden>
              </>
            ) : null} */}

            <TooltipCustom
              name="Attach"
              icon={<AttachFileIcon />}
              onClick={attachFile}
            />
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message"
                type="text"
              ></input>
              <button onClick={sendMsg} type="submit">
                Send a message
              </button>
            </form>
            <TooltipCustom
              name="Voice Message"
              icon={<MicIcon />}
              onClick={() => voiceMessage()}
            />
          </div>
        </>
      ) : (
        <ChatLandingScreen showLandingScreenPhoto={showLandingScreenPhoto} />
      )}
    </div>
  );
}

export default Chat;
