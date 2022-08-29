import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function SendMessage() {
    const [inputMessage, setInputMessage] = useState("");
    
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
    <Container className="fixed-bottom p-2">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="col-9">
            <Form.Group>
              <Form.Control
                value={inputMessage}
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
  );
}

export default SendMessage;