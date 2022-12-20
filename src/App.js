import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navber from "./components/Navber/Navber";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Navber />} />
          <Route path="/Login" element={<Auth />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
