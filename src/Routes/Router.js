import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import HomePage from "./HomePage";
import Login from "./Login";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Router;
