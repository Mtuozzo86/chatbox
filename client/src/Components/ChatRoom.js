import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Message from "./Message";
import Card from "react-bootstrap/Card";
import SendMessage from "../Util/SendMessage";
import TopNavbar from "./TopNavbar";
import { useParams } from "react-router-dom";

function ChatRoom({ currentUser, roomTitle = "The Main Group" }) {
  const params = useParams();

  useEffect(() => {
    fetch(`/conversations/${params.roomId}/chat_messages`)
      .then((r) => r.json())
      .then((messages) => {
        console.log(messages)
        setMessages(messages)
      });
  }, []);

  const [messages, setMessages] = useState([]);

  const listOfMessages = messages.map((message) => {
    return (
      <Message
        key={message.id}
        body={message.body}
        userName={message.user.user_name}
        messageUserId={message.user.id}
        currentUser={currentUser.id}
      />
    );
  });

  function handleSend(params) {
    setMessages([...messages, params]);
  }

  return (
    <>
      <TopNavbar />
      <Container fluid>
        <div className="mb-1 p-2 card-header">
          <h5>{roomTitle}</h5>
        </div>
        <Card>
          <Card.Body className="overflow-auto" style={{ height: 450 }}>
            {listOfMessages}
          </Card.Body>
        </Card>
      </Container>
      <SendMessage onSend={handleSend} roomId={ params.roomId} />
    </>
  );
}

export default ChatRoom;
