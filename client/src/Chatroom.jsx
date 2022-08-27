import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaUsers } from "react-icons/fa";


function Chatroom() {
  return (
    <Container>
      <Row>
              <Col className="col-2 text-center"><FaUsers size={24}/></Col>
              <Col className="col-10">The Main Group</Col>
      </Row>
    </Container>
  );
}

export default Chatroom;
