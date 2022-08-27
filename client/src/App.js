import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import ChatField from "./Components/ChatField";
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

  return (
    <div>
      <TopNavbar />
      <Routes>
        <Route path="room" element={<ChatInput />} />
        <Route path="chat" element={<ChatField />} />
        <Route path="user" element={<Profile user={user || undefined} />} />
        <Route path="create" element={<Create />} />
        <Route path="login" element={<Login onHandleUser={setUser} />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
