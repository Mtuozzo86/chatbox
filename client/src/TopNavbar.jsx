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
        <DropdownButton
          align="end"
          id="dropdown-basic-button"
          title="Dropdown button"
        >
          <LinkContainer to="create">
            <Dropdown.Item>Login</Dropdown.Item>
          </LinkContainer>
        </DropdownButton>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
