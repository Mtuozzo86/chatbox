import React, { useContext, useEffect } from "react";
import { CableContext } from "../context/cable";
import { NavLink } from "react-router-dom";
import { RiKakaoTalkLine } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

function Welcome() {
console.log("welcome page")
  const cableContext = useContext(CableContext)
  // If you're unfamiliar with using context, the above code
  // has nothing to do with Action Cable specifically, it's how we
  // grant access to our CableContext in the component that we're
  // working with
  useEffect(() => {
    const channel = cableContext.cable.subscriptions.create({
    channel: "ConversationsChannel",
    id: 1
  },
      {
    
    received: (data) => console.log(data)
  })
  }, [])



  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  const iconStyle = {
    color: "01BAEF",
  };
  return (
    <Container className="position-relative" style={{ height: 500 }}>
      <div className="text-center my-5">
        <RiKakaoTalkLine style={iconStyle} size={100} />
      </div>
      <div className="d-grid gap-2 text-center mx-auto my-5 w-75 position-absolute top-50 start-50 translate-middle">
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
