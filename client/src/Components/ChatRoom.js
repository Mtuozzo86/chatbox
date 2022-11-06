import React, { useEffect, useState, useContext } from "react";
import { CableContext } from "../context/cable";
import Container from "react-bootstrap/Container";
import Message from "./Message";
import Card from "react-bootstrap/Card";
import SendMessage from "../Util/SendMessage";
import TopNavbar from "./TopNavbar";
import { useParams } from "react-router-dom";
import { BsArrowLeftSquare } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";

function ChatRoom({ currentUser }) {
  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState("");

  const params = useParams();
  const cableContext = useContext(CableContext);

  useEffect(() => {
    const channel = cableContext.cable.subscriptions.create(
      {
        channel: "ConversationsChannel",
        id: params.roomId,
      },
      {
        received: (data) => setMessages((previous) => [...previous, data]),
      }
    );
  }, [params.roomId]);

  useEffect(() => {
    fetch(`/conversations/${params.roomId}`)
      .then((r) => r.json())
      .then((data) => setRoomName(data.room_name));
  }, []);

  useEffect(() => {
    fetch(`/conversations/${params.roomId}/chat_messages`)
      .then((r) => r.json())
      .then((messages) => {
        setMessages(messages);
      });
  }, [params.roomId]);

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
        <div className="mb-1 p-3 card-header d-flex">
          <h5 className="flex-grow-1">{roomName}</h5>
          <AiOutlineUserAdd color="01BAEF" size={30} />
        </div>
        <Card>
          <Card.Body className="overflow-auto" style={{ height: 450 }}>
            {listOfMessages}
          </Card.Body>
        </Card>
      </Container>
      <SendMessage onSend={handleSend} roomId={params.roomId} />
    </>
  );
}

export default ChatRoom;
