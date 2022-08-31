import React from "react";
import { NavLink } from "react-router-dom";
import { RiKakaoTalkLine } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/esm/Container";

function Welcome() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  const iconStyle = {
    color: "01BAEF",
  };
  return (
    <Container>
      <div className="text-center mt-5">
        <RiKakaoTalkLine style={iconStyle} size={50} />
      </div>
      <div className="d-grid gap-2 text-center mt-5">
        <NavLink style={linkStyle} to="login">
          <Button className="list-group-item-action">Login</Button>
        </NavLink>
        <NavLink style={linkStyle} to="create">
          <Button className="list-group-item-action btn-outline-primary" variant="dark-outline">
            Create
          </Button>
        </NavLink>
      </div>
    </Container>
  );
}

export default Welcome;
