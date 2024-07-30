import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard/dashBoard";
import Rewards from "./components/Rewards/rewards";
import Login from "./components/Login/login";
import ScrollToTop from "./components/scrollUp";
import NatwestProducts from "./components/NatwestProducts/natwestProducts";

import "./App.css";

const App = () => {
  const [fitnessPoints, setFitnessPoints] = useState(4000);
  const [rewardPoints, setRewardPoints] = useState(0);
  return (
    <div className="iphone-container">
      <div className="iphone">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<DashBoard fitnessPoints={fitnessPoints} />}
          />
          <Route
            path="/login"
            element={
              <Login
                fitnessPoints={fitnessPoints}
                setFitnessPoints={setFitnessPoints}
                rewardPoints={rewardPoints}
                setRewardPoints={setRewardPoints}
              />
            }
          />
          <Route
            path="/rewards"
            element={
              <Rewards
                fitnessPoints={fitnessPoints}
                setFitnessPoints={setFitnessPoints}
                rewardPoints={rewardPoints}
                setRewardPoints={setRewardPoints}
              />
            }
          />
          <Route path="/products" element={<NatwestProducts />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
