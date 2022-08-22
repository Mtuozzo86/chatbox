import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";


function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" fixed="bottom">
      <Container>
        <AiFillWechat />
        <AiOutlineUser />
      </Container>
    </Navbar>
  );
}

export default NavBar;
