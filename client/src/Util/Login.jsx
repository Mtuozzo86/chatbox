import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onHandleUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("")
  const history = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(
          (data) => onHandleUser(data.user_name),
          setUserName(""),
          setPassword(""),
          history("/rooms")
        );
      } else {
        r.json().then((errors) => setErrors(errors));
      }
    });
  }

  return (
    <Container>
      LOGIN
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Login
        </Button>
      </Form>
      {errors && <p>{errors.error}</p>}
    </Container>
  );
}

export default Login;
