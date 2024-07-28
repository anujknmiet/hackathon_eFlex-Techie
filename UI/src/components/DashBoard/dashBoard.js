import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "./profile";
import Header from "../header";
import FitnessTrackers from "./fitnessTrackers";
const DashBoard = () => {
  return (
    <>
      <Header />
      <Container fluid style={{ marginTop: "5rem" }}>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Profile />
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col lg={9}>
            <FitnessTrackers />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DashBoard;
