import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import walking from "../../img/walking.jpeg";
import running from "../../img/running.jpeg";
import swimming from "../../img/swimming.jpeg";
import "../../CSS/fitnessTrackers.css";

function FitnessTrackers() {
  return (
    <Container>
      <Row className="d-flex justify-content-center text-center">
        <Col xs={12} sm={12} md={6} lg={4} className="mb-4">
          <Card className="mx-2 my-2">
            <div className="img-container">
              <Card.Img variant="top" src={walking} className="card-img" />
            </div>
            <Card.Body>
              <Card.Title>Walking</Card.Title>
              <Card.Text>
                <Button className="progress-button">Your Progress</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="mb-4">
          <Card className="mx-2 my-2">
            <div className="img-container">
              <Card.Img variant="top" src={running} className="card-img" />
            </div>
            <Card.Body>
              <Card.Title>Running</Card.Title>
              <Card.Text>
                <Button className="progress-button">Your Progress</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="mb-4">
          <Card className="mx-2 my-2">
            <div className="img-container">
              <Card.Img variant="top" src={swimming} className="card-img" />
            </div>
            <Card.Body>
              <Card.Title>Swimming</Card.Title>
              <Card.Text>
                <Button className="progress-button">Your Progress</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FitnessTrackers;
