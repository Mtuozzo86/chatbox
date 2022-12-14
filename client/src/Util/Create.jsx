import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { RiKakaoTalkLine } from "react-icons/ri";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create({ onHandleUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  console.log(errors)

  const history = useNavigate();
  const iconStyle = {
    color: "01BAEF",
  };
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
      } else {
        r.json().then(errors => setErrors(errors))

      }
    });
  }

  return (
    <Container className="position-relative" style={{ height: 500 }}>
      <div className="text-center my-5">
        <RiKakaoTalkLine style={iconStyle} size={100} />
      </div>
      <Form className="d-grid gap-2 text-center mx-auto my-5 w-75 position-absolute top-50 start-50 translate-middle" onSubmit={handleSubmit}>
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
