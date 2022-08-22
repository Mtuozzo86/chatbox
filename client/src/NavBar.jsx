import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" fixed="bottom">
      <Container className="justify-content-center gap-2">
        <Button className="flex-fill">
          <NavLink to="chat">
            <AiFillWechat size={26} color="white" />
          </NavLink>
        </Button>

        <Button className="flex-fill">
          <NavLink to="user">
            <AiOutlineUser size={26} color="white"/>
          </NavLink>
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
