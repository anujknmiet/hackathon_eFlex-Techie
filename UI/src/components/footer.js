// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5" style={{ padding: "1rem 0" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5 style={{ color: "rgb(252, 82, 0)" }}>About Us</h5>
            <p>Some information about the company.</p>
          </Col>
          <Col md={4}>
            <h5 style={{ color: "rgb(252, 82, 0)" }}>Contact</h5>
            <ul>
              <li>Email: info@example.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={{ color: "rgb(252, 82, 0)" }}>Follow Us</h5>
            <ul>
              <li>
                <a href="#" style={{ color: "rgb(252, 82, 0)" }}>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "rgb(252, 82, 0)" }}>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "rgb(252, 82, 0)" }}>
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
