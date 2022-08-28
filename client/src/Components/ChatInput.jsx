import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Message from "./Message";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function ChatInput({ roomTitle = "The Main Group" }) {
  useEffect(() => {
    fetch("/chat_messages")
      .then((r) => r.json())
      .then((messages) => setMessages(messages));
  }, []);

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const listOfMessages = messages.map((message) => {
    return (
      <Message
        key={message.id}
        body={message.body}
        user={message.user.user_name}
      />
    );
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/chat_messages", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ inputMessage }),
    });
  }

  return (
    <>
      <Container fluid>
        <div className="mb-4 p-1 border-bottom">{roomTitle}</div>
        <Card>
          <Card.Body className="overflow-auto" style={{height: 450}}>{listOfMessages}</Card.Body>
        </Card>
      </Container>
      <Container className="fixed-bottom p-2">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col className="col-9">
              <Form.Group>
                <Form.Control
                  type="text"
                  onChange={(e) => setInputMessage(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="col-2">
              <Button type="submit">Send</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default ChatInput;
