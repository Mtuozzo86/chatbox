import Card from "react-bootstrap/Card";
import NavBar from "./NavBar";

function Profile({ user }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Header>{user.user_name}</Card.Header>
          <Card.Text>
            You are successfully logged in.  Welcome to my chat app.  Create a room, invite multiple friends.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <NavBar />
    </>
  );
}

export default Profile;
