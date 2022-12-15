import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../Components/TopNavbar";
import NavBar from "../Components/NavBar";

function CreateRoom({ onCreateRoom }) {
  const [roomName, setRoomName] = useState("");
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/conversations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomName }),
    })
    .then(history("/rooms"))
    .then(onCreateRoom(roomName))
  }

  return (
    <div>
      <TopNavbar/>
      <Container>
        CREATE ROOM
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Room Name</Form.Label>
            <Form.Control
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              type="text"
              placeholder="Name your room"
              required
            />
          </Form.Group>
          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <NavBar />
    </div>
  );
}

export default CreateRoom;
