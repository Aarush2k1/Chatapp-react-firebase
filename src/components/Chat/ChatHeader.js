import React, { useEffect, useState } from "react";
import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import "./ChatHeader.css";
import TooltipCustom from "../TooltipCustom";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, Hidden } from "@material-ui/core";
import DropdownMenu from "../DropdownMenu";

function ChatHeader({ chatName, chatsId, _chatId, msgs, db, isRoomExist }) {
  const [user] = useAuthState(auth);
  const [menuChat, setMenuChat] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [isLastMessage, setIsLastMessage] = useState(false);

  useEffect(() => {
    const errorAbout = "errorAbout";

    if (msgs[msgs.length - 1]?.timestamp) {
      setShowDate(true);
    } else {
      setShowDate(false);
    }

    if (msgs[msgs.length - 1]) {
      setIsLastMessage(true);
    } else {
      setIsLastMessage(false);
    }
  }, [msgs, chatsId]);

  // console.log("ROOOM ID", chatsId);
  // console.log("__ROOOM ID", _chatId);

  const getDateFromMessage = () => {
    return new Date(
      msgs[msgs.length - 1]?.timestamp?.toDate()
    ).toLocaleTimeString([], {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    });
  };

  const getDateLocal = () => {
    return new Date().toLocaleTimeString([], {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    });
  };
  const searchMessage = () => {
    // setDrawerRightSearch(true);
    alert("search");
  };

  const contactInfo = () => {
    // setDrawerRightInfo(true);
    setMenuChat(null);
  };

  const selectMessages = () => {
    const selectMessages = "selectMessages";
    alert("Select Messages is not yet  available!");
  };

  const muteNotifications = () => {
    const muteNotifications = "muteNotifications";
    alert("Mute Notifications is not yet available!");
  };

  const clearMessages = () => {
    const clearMessages = "clearMessages";
    alert("Clear Messages is not yet available!");
  };

  const deleteRoom = () => {
    const roomDeleted = "roomDeleted";
    db.collection("chats")
      .doc(chatsId)
      .delete()
      .then(function () {
        alert("Room successfully deleted!");
      })
      .catch(function (error) {
        alert(`Error removing room! ${error}`);
      });
  };

  const handleMenuClose = () => {
    setMenuChat(null);
  };

  const handleMenuOpen = (event) => {
    setMenuChat(event.currentTarget);
  };

  const menuChatLists = [
    {
      title: "Contact info",
      onClick: () => contactInfo(),
      id: Math.random() * 100000,
    },
    {
      title: "Select messages",
      onClick: () => selectMessages(),
      id: Math.random() * 100000,
    },
    {
      title: "Mute notifications",
      onClick: () => muteNotifications(),
      id: Math.random() * 100000,
    },
    {
      title: "Clear messages",
      onClick: () => clearMessages(),
      id: Math.random() * 100000,
    },
    {
      title: "Delete Room",
      onClick: () => deleteRoom(),
      id: Math.random() * 100000,
    },
  ];
  return (
    <div className="chat_header">
      <Avatar
        src={`https://avatars.dicebear.com/api/avataaars/${chatsId}.svg`}
      />
      <div className="chat_headerInfo">
        <h3>{chatName}</h3>

        <Hidden only={["xs"]}>
          {isLastMessage ? (
            <>
              {showDate ? (
                <p>Last seen {getDateFromMessage()}</p>
              ) : (
                <p>Last seen {getDateLocal()}</p>
              )}
            </>
          ) : null}
        </Hidden>
      </div>
      <div className="chat_headerRight">
        <TooltipCustom
          name="Search"
          icon={<SearchOutlinedIcon />}
          onClick={searchMessage}
        />
        <TooltipCustom
          name="Menu"
          icon={<MoreVertIcon />}
          onClick={handleMenuOpen}
        />
        <DropdownMenu
          menuLists={menuChatLists}
          menu={menuChat}
          handleMenuOpen={handleMenuOpen}
          handleMenuClose={handleMenuClose}
        />
      </div>
    </div>
  );
}

export default ChatHeader;
