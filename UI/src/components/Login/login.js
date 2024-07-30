import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import hackathonService from "../../services/hackathon.service";
import Loader from "../loader";

// import { useAuth } from "../../Auth/auth";
import NatwestLogo from "../../img/Natwest_logo.jfif";

export default function Login({
  fitnessPoints,
  setFitnessPoints,
  rewardPoints,
  setRewardPoints,
}) {
  const navigate = useNavigate();
  console.log(fitnessPoints);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const callApi = async (e) => {
    setLoading(true);
    try {
      const data = await hackathonService.customerData();
      console.log(data);
      const rewardsData = await hackathonService.getRewards(
        12234,
        23456,
        fitnessPoints,
        5455
      );
      console.log(rewardsData);
      setRewardPoints(rewardsData.rewardPoints);
      navigate("/rewards", { state: { rewardsData } });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    callApi();
  };
  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          <Navbar style={{ backgroundColor: "rgb(71 36 120)" }}>
            <Container>
              <Navbar.Brand href="#home" style={{ color: "white" }}>
                <img src={NatwestLogo} alt="" />
                <span style={{ color: "white" }}>Natwest Bank</span>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Container>
          </Navbar>

          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <div className="d-flex justify-content-center">
                  <div className="logoConatiner">
                    <img src={NatwestLogo} alt="" />
                  </div>
                  <div className="formHeader">
                    <h2
                      className="text-center "
                      style={{ color: "purple", marginTop: ".4rem" }}
                    >
                      LOGIN
                    </h2>
                  </div>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="enter your email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange(e)}
                    />
                    {/* {errors.email && <span className="error">{errors.email}</span>} */}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="enter your Password"
                      name="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange(e)}
                    />
                    {/* {errors.password && (
                <span className="error">{errors.password}</span>
              )} */}
                  </div>
                  {/* {loginError && (
              <div className="alert alert-danger">{loginError}</div>
            )} */}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ backgroundColor: "purple" }}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
