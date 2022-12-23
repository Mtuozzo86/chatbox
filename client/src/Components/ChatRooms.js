import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ChatroomName from "./ChatroomName";
import TopNavbar from "./TopNavbar";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
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
    <Container style={{height: '100vh'}} fluid className="d-flex flex-column p-0 position-relative">
      <TopNavbar />
      <div style={{height: '100%',overflow: "auto"}}>{rooms}</div>
      <nav className="w-100">
        <LinkContainer
          className='add-room-button'
            style={{ borderRadius: "100%", boxShadow: "0px 0px 16px black" }}
            to="/createroom"
          >
            <BsFillPlusCircleFill
              className="me-3"
              color="#0d6efd"
              size={60}
            />
          </LinkContainer>
        <NavBar />
      </nav>
    </Container>
  );
}

export default ChatRooms;
