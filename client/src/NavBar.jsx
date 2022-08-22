import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <Navbar bg="primary" variant="dark" fixed="bottom">
      <Container className="justify-content-center gap-2">
        <Link to="chat" >
          <Button className="flex-fill">
            <AiFillWechat size={26} />
          </Button>
        </Link>
        <Link to="user">
          <Button className="flex-fill">
            <AiOutlineUser size={26} />
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
