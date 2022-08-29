import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Components/Profile";
import ChatRooms from "./Components/ChatRooms";
import TopNavbar from "./Components/TopNavbar";
import Create from "./Util/Create";
import Login from "./Util/Login";
import ChatInput from "./Components/ChatInput";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((info) => {
        setUser(info)
        
      });
  }, []);


  return (
    <div>
      <TopNavbar />
      <Routes>
        <Route path="create" element={<Create />} />
        <Route path="login" element={<Login onHandleUser={setUser} />} />
        <Route path="/" element={<ChatRooms />} />
        <Route path="room" element={<ChatInput currentUser={user} />} />
        <Route path="user" element={<Profile user={user || undefined} />} />
      </Routes>
    </div>
  );
}

export default App;
