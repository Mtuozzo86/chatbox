import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ChatroomName from "./ChatroomName";
import TopNavbar from "./TopNavbar";
import CreateRoom from "../Util/CreateRoom";
import { AiFillPlusCircle } from "react-icons/ai";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/esm/Container";

function ChatRooms() {
  const [listOfRooms, setListofRooms] = useState([]);

  useEffect(() => {
    fetch(`/me`)
      .then((r) => r.json())
      // .then((user) => console.log(user));
      .then((user) => setListofRooms(user.conversations));
  }, []);

  const rooms = listOfRooms.map((room) => {
    return (
      <ChatroomName key={room.id} roomTitle={room.room_name} roomId={room.id} />
    );
  });

  return (
    <div>
      <TopNavbar />
      {rooms}

      <div className="position-relative" style={{height: 450}}>
        <AiFillPlusCircle
          className="position-absolute bottom-0 end-0"
          color="#0d6efd"
          size={50}
        />
      </div>
      <NavBar />
    </div>
  );
}

export default ChatRooms;
