import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create({onHandleUser}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(
          (data) => onHandleUser(data),
          setUserName(""),
          setPassword(""),
          //goes to list of rooms and conversations <ChatRooms /> 
          history("/rooms")
        );
      }
    });
  }

  return (
    <Container>
      CREATE
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Pick a name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>

      <p className="text-center">
        Already have an account? Sign in <Link to="/login">here</Link>
      </p>

    </Container>
  );
}

export default Create;
