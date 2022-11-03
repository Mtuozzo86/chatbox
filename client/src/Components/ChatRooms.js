import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ChatroomName from "./ChatroomName";
import TopNavbar from "./TopNavbar";
import { AiFillPlusCircle } from "react-icons/ai";
import { LinkContainer } from "react-router-bootstrap";

function ChatRooms({user, onChooseRoom}) {
  const [listOfRooms, setListofRooms] = useState([]);

  useEffect(() => {
    fetch(`/me`)
      .then((r) => r.json())
      .then((user) => setListofRooms(user.conversations));
  }, []);

  const rooms = listOfRooms.map((room) => {
    return (
      <ChatroomName key={room.id} roomTitle={room.room_name} roomId={room.id} user={user} onChooseRoom={onChooseRoom } />
    );
  });

  return (
    <div>
      <TopNavbar />
      {rooms}
      <div className="position-relative" style={{ height: 450 }}>
        <LinkContainer to="/createroom">
          <AiFillPlusCircle
            className="position-absolute bottom-0 end-0 me-2"
            color="#0d6efd"
            size={55}
          />
        </LinkContainer>
      </div>
      <NavBar />
    </div>
  );
}

export default ChatRooms;
