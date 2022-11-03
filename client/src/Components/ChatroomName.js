import { FaUsers } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import ChatRoom from "./ChatRoom";
import { Routes, Route, useNavigate } from "react-router-dom";


function ChatroomName({ roomId, roomTitle, onChooseRoom}) {
  function handleChooseRoom(params) {
    onChooseRoom(params)
  }

  return (
    <>
      <Container>
          <LinkContainer onClick={() => handleChooseRoom(roomTitle)} to={`/rooms/${roomId}`}>
          <Row>
            <Col className="col-2 text-center">
              <FaUsers size={24} />
            </Col>
            <Col className="col-10">{roomTitle}</Col>
          </Row>
        </LinkContainer>
      </Container>
    </>
  );
}

export default ChatroomName;
