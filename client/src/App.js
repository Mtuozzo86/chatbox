import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
import ChatField from "./ChatField";
import { Routes, Route } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import Create from "./Create";
import Login from "./Login"
import { useState} from "react"


function App() {
  const [user, setUser] = useState("")
  
  return (
    <div>
      <TopNavbar />
      <Routes>
        <Route path="chat" element={<ChatField />} />
        <Route path="user" element={<Profile user={user || undefined}/>} />
        <Route path="create" element={<Create />} />
        <Route path="login" element={<Login onHandleUser={setUser}/>} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
