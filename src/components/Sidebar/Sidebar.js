import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SidebarChat from "./SidebarChat/SidebarChat";

import db, { auth } from "../../services/firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import TooltipCustom from "../TooltipCustom";
import DropdownMenu from "../DropdownMenu";
import SearchBar from "./SearchBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams, useHistory } from "react-router-dom";
import NewChat from "./NewChat";

function Sidebar({ rooms, setIsRoomExist, isRoomExist }) {
  const history = useHistory();
  const [user] = useAuthState(auth);
  const { roomId } = useParams();
  const [menuSidebar, setMenuSidebar] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [noRooms, setNoRooms] = useState(false);
  const [isSearchFound, setIsSetSearchFound] = useState(false);

  const findRoom = function (myRooms) {
    return function (x) {
      var searchRoom = x.data.name + "";
      return (
        searchRoom.toLowerCase().includes(myRooms.toLowerCase()) || !myRooms
      );
    };
  };

  useEffect(() => {
    const roomResult = () => {
      return (
        <>
          {rooms.filter(findRoom(search)).map((room) => (
            <p key={room.id}>{room.name}</p>
          ))}
        </>
      );
    };

    if (search) {
      var result = roomResult();
      console.log("result", result);
      if (result.props.children.length > 0) {
        setIsSetSearchFound(true);
      } else {
        setIsSetSearchFound(false);
      }
    }

    var roomList = rooms;
    if (roomList) {
      //checks if the current route(roomId) exists in roomList(array)
      const index = roomList.findIndex(function (id, index) {
        return id.id === roomId;
      });

      if (index >= 0) {
        setIsRoomExist(index);
        // console.log("ROOM EXISTS");
      } else if (index === -1) {
        setIsRoomExist(index);
        history.push("/");
        // console.log("ROOM DOES NOT EXIST");
      }
    }
  }, [search, rooms, roomId, history, setIsRoomExist]);

  useEffect(() => {
    if (rooms) {
      if (rooms.length > 0) {
        setNoRooms(false);
        setLoading(true);
      } else if (rooms.length === 0 && isRoomExist === -1) {
        setNoRooms(true);
        setLoading(true);
      }
    }
  }, [rooms]);

  const handleDrawerLeftOpen = () => {
    setMenuSidebar(null);
  };

  const handleMenuOpen = (event) => {
    setMenuSidebar(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuSidebar(null);
  };
  const archive = () => {
    alert("Archive is not yet available!");
  };

  const starred = () => {
    alert("Starred is not yet available!");
  };

  const settings = () => {
    alert("Settings is not yet available!");
  };

  const logout = () => {
    auth.signOut();
    history.push("/");
  };
  const menuLists = [
    {
      title: "Profile",
      onClick: () => handleDrawerLeftOpen(),
      id: Math.random() * 100000,
    },
    {
      title: "Archived",
      onClick: () => archive(),
      id: Math.random() * 100000,
    },
    {
      title: "Starred",
      onClick: () => starred(),
      id: Math.random() * 100000,
    },
    {
      title: "Settings",
      onClick: () => settings(),
      id: Math.random() * 100000,
    },
    {
      title: "Logout",
      onClick: () => logout(),
      id: Math.random() * 100000,
    },
  ];

  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_header">
          <Avatar src={user?.photoURL} />
          <div className="sidebar_headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <NewChat db={db} user={user} firebase={firebase} />

            <TooltipCustom
              name="Menu"
              icon={<MoreVertIcon />}
              onClick={handleMenuOpen}
            />
            <DropdownMenu
              menuLists={menuLists}
              menu={menuSidebar}
              handleMenuOpen={handleMenuOpen}
              handleMenuClose={handleMenuClose}
            />
          </div>
        </div>
        <SearchBar
          search={search}
          setSearch={setSearch}
          placeholder="Search or start new chat"
        />
        <div className="sidebar_chats">
          {loading ? (
            <>
              {search ? (
                <>
                  {isSearchFound ? (
                    <div>
                      {rooms.filter(findRoom(search)).map((room) => (
                        <SidebarChat
                          key={room.id}
                          id={room.id}
                          name={room.data.name}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="sidebar_chatsContainer_empty">
                      <span>No chat room found</span>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {rooms.map((room) => (
                    <SidebarChat
                      key={room.id}
                      id={room.id}
                      name={room.data.name}
                    />
                  ))}
                </>
              )}
            </>
          ) : (
            <div className="sidebar_chatsContainer_loading">
              <div>
                <CircularProgress />
              </div>
            </div>
          )}

          {noRooms && loading ? (
            <div className="sidebar_chatsContainer_empty">
              <span>No rooms</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
