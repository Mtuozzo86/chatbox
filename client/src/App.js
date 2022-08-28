import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Components/Profile";
import ChatRooms from "./Components/ChatRooms";
import TopNavbar from "./Components/TopNavbar";
import Create from "./Util/Create";
import Login from "./Util/Login";
import Chatroom from "./Components/Chatroom";
import ChatInput from "./Components/ChatInput";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((info) => setUser(info.user_name));
  }, []);

  if (!user) {
    return (
      <>
        <TopNavbar />
        <Routes>
          <Route path="create" element={<Create />} />
          <Route path="login" element={<Login onHandleUser={setUser} />} />
        </Routes>
      </>
    );
  }

  return (
    <div>
      <TopNavbar />
      <Routes>
        <Route path="room" element={<ChatInput />} />
        <Route path="/" element={<ChatRooms />} />
        <Route path="user" element={<Profile user={user || undefined} />} />
        <Route path="create" element={<Create />} />
        <Route path="login" element={<Login onHandleUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
