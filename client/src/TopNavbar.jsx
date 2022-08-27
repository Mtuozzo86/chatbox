import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function TopNavbar() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>Chat</Navbar.Brand>
        <DropdownButton align="end" id="dropdown-basic-button" title="Account">
          <LinkContainer to="create">
            <Dropdown.Item>Create</Dropdown.Item>
          </LinkContainer>
          <LinkContainer to="login">
            <Dropdown.Item>Login</Dropdown.Item>
          </LinkContainer>
          <Dropdown.Divider />
          <Dropdown.Item onClick={()=>console.log("logout button")}>Logout</Dropdown.Item>
        </DropdownButton>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;