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
    <Container fluid className="d-flex flex-column position-relative p-0">
      <TopNavbar />
      <div className="d-flex flex-column">
        <div style={{ height: 500, overflow: "auto" }}>{rooms}</div>
        <nav className="d-flex position-fixed bottom-0 flex-column w-100 align-items-end gap-5">
        {/* <nav className="d-flex flex-column"> */}
          <LinkContainer to="/createroom">
            <AiFillPlusCircle color="#0d6efd" size={60} />
          </LinkContainer>
          <NavBar />
        </nav>
      </div>
    </Container>
  );
}

export default ChatRooms;
