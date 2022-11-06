import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Components/Profile";
import ChatRooms from "./Components/ChatRooms";
import Welcome from "./Components/Welcome";
import Create from "./Util/Create";
import Login from "./Util/Login";
import ChatRoom from "./Components/ChatRoom";
import CreateRoom from "./Util/CreateRoom";
import AddToRoom from "./Util/AddToRoom";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [createdRoom, setCreatedRoom] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  console.log(user);
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((info) => setUser(info));
        // .then(navigate("rooms"));
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="create" element={<Create onHandleUser={setUser} />} />
        <Route path="login" element={<Login onHandleUser={setUser} />} />
        <Route path="/" element={<Welcome />} />
        <Route
          path="rooms"
          element={<ChatRooms user={user} onChooseRoom={setSelectedRoom} />}
        />
        <Route
          path="/rooms/:roomId"
          element={<ChatRoom currentUser={user} />}
        />
        <Route path="user" element={<Profile user={user} />} />
        <Route path="/createroom" element={<CreateRoom />} />
        <Route path="/addcontact" element={<AddToRoom />} />
      </Routes>
    </div>
  );
}

export default App;
