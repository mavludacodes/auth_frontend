import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ManageUsers from "./pages/ManageUsers";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="register" element={<Register />} />
        <Route exact path="profile" element={<ManageUsers />} />
      </Routes>
    </div>
  );
}

export default App;
