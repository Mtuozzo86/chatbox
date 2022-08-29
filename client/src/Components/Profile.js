import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import NavBar from "./NavBar";

function Profile({ user = "Anonymous User" }) {

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Header>{user.user_name}</Card.Header>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <NavBar />
    </>
  );
}

export default Profile;