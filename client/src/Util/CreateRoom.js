import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { RiKakaoTalkLine } from "react-icons/ri";


import { Link } from "react-router-dom";
function CreateRoom() {
    const [roomName, setRoomName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
    }


  return (
    <div>
      <Container>
        CREATE ROOM
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
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

export default CreateRoom