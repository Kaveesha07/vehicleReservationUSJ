import { useState } from "react";
import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Login />} />
            <Route path="/profile" element={<Login />} />
            <Route path="/request" element={<Login />} />
            <Route path="/my-requests" element={<Login />} />
            <Route path="/my-bookings" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
