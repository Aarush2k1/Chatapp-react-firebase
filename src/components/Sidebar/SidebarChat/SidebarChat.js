import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { Link } from "react-router-dom";
import db from "../../../services/firebase";

function SidebarChat({ id, name }) {
  const formatDate = (dateString) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    return new Date(dateString.toDate()).toLocaleTimeString(undefined, options);
  };

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (id) {
      db.collection("chats")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  return (
    <Link to={`/chats/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`} />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          {messages[0]?.photo ? (
            <div>
              <PhotoCameraIcon />
            </div>
          ) : null}
          <p>{messages[0]?.message}</p>
        </div>
        <span className="sidebarChat_info_time">
          {messages[0]?.timestamp && formatDate(messages[0].timestamp)}
        </span>
      </div>
    </Link>
  );
}

export default SidebarChat;
