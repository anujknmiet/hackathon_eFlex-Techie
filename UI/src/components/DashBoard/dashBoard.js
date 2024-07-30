import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "./profile";
import Header from "../header";
import Footer from "../footer";
import FitnessTrackers from "./fitnessTrackers";
import hackathonService from "../../services/hackathon.service";
const DashBoard = ({ fitnessPoints }) => {
  return (
    <>
      <Header />
      <Container fluid style={{ marginTop: "5rem" }}>
        <Row className="justify-content-center ">
          <Col>
            <FitnessTrackers />
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col lg={6}>
            <Profile fitnessPoints={fitnessPoints} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default DashBoard;
