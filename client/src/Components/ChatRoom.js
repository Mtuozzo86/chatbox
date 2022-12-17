import React, { useEffect, useState, useContext, useRef } from "react";
import { CableContext } from "../context/cable";
import Container from "react-bootstrap/Container";
import Message from "./Message";
import Card from "react-bootstrap/Card";
import SendMessage from "../Util/SendMessage";
import TopNavbar from "./TopNavbar";
import { useParams, Link } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";

function ChatRoom({ currentUser }) {
  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState("");
  const bottom = useRef();
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

  //scroll to bottom when new messages are added
  useEffect(() => {
    bottom.current?.scrollIntoView()
  },[messages])

  const listOfMessages = messages.map((message) => {
    return (
      <>
        <Message
          key={message.id}
          body={message.body}
          userName={message.user.user_name}
          messageUserId={message.user.id}
          currentUser={currentUser.id}
        />
        <div ref={bottom}></div>
      </>
    );
  });

  function handleSend(params) {
    setMessages([...messages, params])
  }

  return (
    <>
      <TopNavbar/>
      <Container fluid>
        <div className="p-3 card-header d-flex justify-content-between">
          {roomName}
          <Link to="/addcontact" state={params.roomId}>
            <AiOutlineUserAdd className="text-end" color="01BAEF" size={30} />
          </Link>
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
