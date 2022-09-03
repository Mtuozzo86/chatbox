import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ChatroomName from "./ChatroomName";
import TopNavbar from "./TopNavbar";
import { useParams } from "react-router-dom";
function ChatRooms({ user }) {
  const [listOfRooms, setListofRooms] = useState([]);

  useEffect(() => {
    fetch(`/me`)
      .then((r) => r.json())
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

      <NavBar />
    </div>
  );
}

export default ChatRooms;
