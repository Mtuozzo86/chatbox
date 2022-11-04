import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      .then(onCreateRoom(roomName))
      .then(history("/rooms"));
  }

  return (
    <div>
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
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group> */}

          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default CreateRoom;
