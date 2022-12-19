import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/esm/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function TopNavbar({ roomName, backArrow }) {
  const navigate = useNavigate();
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(navigate("/"));
  }
  return (
    <Navbar bg="light" className="shadow p-3 mb-1 bg-body rounded">
      <Container>
        <Navbar.Brand>
          {roomName ? (
            <div className="d-flex gap-5">
              <div onClick={() => navigate(-1)}>
                <IoMdArrowRoundBack
                  color="01BAEF"
                  size={30}
                  className="gap-3"
                />
              </div>
              {roomName}
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
