import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ChatroomName from "./ChatroomName";
import TopNavbar from "./TopNavbar";
import CreateRoom from "../Util/CreateRoom";


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
      {/* <CreateRoom /> */}
      <NavBar />
    </div>
  );
}

export default ChatRooms;
