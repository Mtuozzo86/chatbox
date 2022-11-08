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
  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/users/${contact}`, {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ contact, roomId }),
    })
      .then(resp => {
        if (resp.ok) {
        setSuccess('good')
        } else {
          resp.json().then(data => setErrors(data.error))
      }
    })
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
              required
            />
          </Form.Group>
          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
        </Form>
        {errors ? errors : success}
      </Container>
    </div>
  );
}

export default AddToRoom;
