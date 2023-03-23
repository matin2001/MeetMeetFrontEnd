import React from "react";
import { Route, Routes } from "react-router-dom";
//import Home from "./Home";
import HomePage from "./HomePage";
import Login from "./Login";
import Room from "./Room";
import AddRoom from "./AddRoom"

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/room" element={<Room />} />
        <Route path="/addRoom" element={<AddRoom />} />
      </Routes>
    </div>
  );
};

export default Router;
