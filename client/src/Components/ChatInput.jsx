import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

function ChatInput({ roomTitle = "The Main Group" }) {
  useEffect(() => {
    fetch("/chat_messages")
      .then((r) => r.json())
      .then((messages) => setMessages(messages));
  }, []);

  const [messages, setMessages] = useState([]);
  
  return <Container fluid>{roomTitle}</Container>;
}

export default ChatInput;
