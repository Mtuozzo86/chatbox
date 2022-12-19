import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    // <Navbar bg="primary" variant="dark" fixed="bottom">
    <Container fluid className="p-0 m-0">
      <Navbar bg="primary" variant="dark">
        <LinkContainer to="/rooms">
          <Button className="flex-fill">
            <AiFillWechat size={26} color="white" />
          </Button>
        </LinkContainer>

        <LinkContainer to="/user">
          <Button className="flex-fill">
            <AiOutlineUser size={26} color="white" />
          </Button>
        </LinkContainer>
      </Navbar>
    </Container>
  );
}

export default NavBar;
