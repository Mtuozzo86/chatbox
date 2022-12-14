import React from "react";
import { NavLink } from "react-router-dom";
import { RiKakaoTalkLine } from "react-icons/ri";
import Button from "react-bootstrap/Button";
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
      <div className="text-center p-5">
        <RiKakaoTalkLine style={iconStyle} size={100} />
      </div>
      <div className="d-grid gap-3 text-center my-5 w-75 m-auto">
        <NavLink style={linkStyle} to="login">
          <Button className="list-group-item-action">Login</Button>
        </NavLink>
        <NavLink style={linkStyle} to="create">
          <Button
            className="list-group-item-action btn-outline-primary"
            variant="dark-outline"
          >
            Create
          </Button>
        </NavLink>
      </div>
    </Container>
  );
}

export default Welcome;
