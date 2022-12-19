import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import NavBar from "./NavBar";

function Profile({ user }) {
  return (
    <Container fluid className="p-0 position-relative">
      <Card>
        <Card.Body>
          <Card.Header>{user.user_name}</Card.Header>
          <Card.Text>
            You are successfully logged in. Welcome to my chat app. Create a
            room, invite multiple friends.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <div className="position-fixed bottom-0 w-100">
        <NavBar />
      </div>
    </Container>
  );
}

export default Profile;
