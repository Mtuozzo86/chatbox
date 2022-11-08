import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/esm/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

function TopNavbar({ roomName, backArrow }) {
  
  const navigate = useNavigate();
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(navigate("/"));
  }
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>
          {roomName ? (
            <div>
              <IoMdArrowRoundBack color="01BAEF" size={30} /> {roomName}
            </div>
          ) : (
            "Chat"
          )}
        </Navbar.Brand>
        <DropdownButton align="end" id="dropdown-basic-button" title="Account">
          <LinkContainer to="/create">
            <Dropdown.Item>Create</Dropdown.Item>
          </LinkContainer>
          <LinkContainer to="/login">
            <Dropdown.Item>Login</Dropdown.Item>
          </LinkContainer>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </DropdownButton>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
