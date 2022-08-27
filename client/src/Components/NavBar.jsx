import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" fixed="bottom">
      <Container className="justify-content-center gap-2">
        <LinkContainer to="chat">
          <Button className="flex-fill" >
            <AiFillWechat size={26} color="white" />
          </Button>
        </LinkContainer>

        <LinkContainer to="user">
          <Button className="flex-fill" >
            <AiOutlineUser size={26} color="white" />
          </Button>
        </LinkContainer>
      </Container>
    </Navbar>
  );
}

export default NavBar;
