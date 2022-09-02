import { FaUsers } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TopNavbar from "./TopNavbar";

function ChatroomName({ roomTitle = "The Main Group" }) {
  return (
    <>
      
      <Container>
        <LinkContainer to="/room">
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
