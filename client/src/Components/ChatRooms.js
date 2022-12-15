import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ChatroomName from "./ChatroomName";
import TopNavbar from "./TopNavbar";
import { AiFillPlusCircle } from "react-icons/ai";
import { LinkContainer } from "react-router-bootstrap";

function ChatRooms({ user, onChooseRoom }) {
  const [listOfRooms, setListofRooms] = useState([]);

  useEffect(() => {
    fetch(`/me`)
      .then((r) => r.json())
      .then((user) => setListofRooms(user.conversations));
  }, []);

  const rooms = listOfRooms.map((room) => {
    return (
      <ChatroomName
        key={room.id}
        roomTitle={room.room_name}
        roomId={room.id}
        user={user}
        onChooseRoom={onChooseRoom}
      />
    );
  });

  return (
    <div>
      <TopNavbar />
      <div
        className="position-relative"
        style={{ height: 520, overflow: "auto" }}
      >
        {rooms}
        <LinkContainer to="/createroom">
          <div className="d-grid position-sticky bottom-0 justify-content-end">
            <AiFillPlusCircle
              color="#0d6efd"
              size={60}
            />
          </div>
        </LinkContainer>
      </div>
      <NavBar />
    </div>
  );
}

export default ChatRooms;
