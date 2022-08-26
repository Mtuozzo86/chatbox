import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile";
import ChatField from "./ChatField";
import { Routes, Route } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import Create from "./Create";

function App() {
  return (
    <div>
      <TopNavbar />
      <Routes>
        <Route path="chat" element={<ChatField />} />
        <Route path="user" element={<Profile />} />
        <Route path="create" element={<Create />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
