import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function AddToRoom() {
  const location = useLocation();
  const roomId = location.state;
  const [contact, setContact] = useState("");
  function handleSubmit(params) {
    fetch(`/conversations/${roomId}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ contact, roomId }),
    });
  }

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Add a contact</Form.Label>
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
