import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ChatroomName from "./ChatroomName";
import TopNavbar from "./TopNavbar";
import { AiFillPlusCircle } from "react-icons/ai";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/esm/Container";

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
    <Container className="position-relative">
      <TopNavbar />
      <div className="d-grid">
        <div style={{ height: 520, overflow: "auto" }}>{rooms}</div>
        <div className="d-grid position-sticky bottom-0 end-0 justify-content-end">
          <LinkContainer to="/createroom">
            <AiFillPlusCircle color="#0d6efd" size={60} />
          </LinkContainer>
        </div>
      </div>
      <NavBar />
    </Container>
  );
}

export default ChatRooms;

