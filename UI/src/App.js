import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard/dashBoard";
import Rewards from "./components/Rewards/rewards";
import Login from "./components/Login/login";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
    </>
  );
};
export default App;
