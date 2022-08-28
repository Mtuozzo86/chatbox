import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Message from "./Message";

function ChatInput({ roomTitle = "The Main Group" }) {
  useEffect(() => {
    fetch("/chat_messages")
      .then((r) => r.json())
      .then((messages) => setMessages(messages));
  }, []);


  const [messages, setMessages] = useState([]);

  const listOfMessages = messages.map(message => {
    return <Message key={message.id} body={message.body} />
  })

  return (
    <Container fluid>
      <div>{roomTitle}</div>
      <div>{listOfMessages}</div>
    </Container>
  );
}

export default ChatInput;
