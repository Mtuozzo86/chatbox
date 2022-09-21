import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Components/Profile";
import ChatRooms from "./Components/ChatRooms";
import Welcome from "./Components/Welcome";
import Create from "./Util/Create";
import Login from "./Util/Login";
import ChatRoom from "./Components/ChatRoom";

function App({ cable }) {

  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json()
          .then((info) => setUser(info))
          // .then(navigate("rooms"));
      } else {
        navigate("/");
      }
    });
  }, []);



  return (
    <div>
      <Routes>
        <Route path="create" element={<Create />} />
        <Route path="login" element={<Login onHandleUser={setUser} />} />
        <Route path="/" element={<Welcome />} />
        <Route path="rooms" element={<ChatRooms user={user} cable={cable} />} />
        <Route path="/rooms/:roomId" element={<ChatRoom currentUser={user} cable={cable} />} />
        <Route path="user" element={<Profile user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;
