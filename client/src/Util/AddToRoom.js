import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function AddToRoom() {
    const location = useLocation()
    const  roomId  = location.state
    console.log(roomId)
  const [contact, setContact] = useState("");
  return (
    <div>
      <Container>
        <Form onSubmit={null}>
          <Form.Group className="mb-3">
            <Form.Label>Room Name</Form.Label>
            <Form.Control
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              type="text"
              placeholder="Add Contact"
            />
          </Form.Group>
          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddToRoom;
