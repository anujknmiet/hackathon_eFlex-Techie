import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../header";
import Footer from "../footer";
import hackathonService from "../../services/hackathon.service";

const Rewards = ({
  fitnessPoints,
  setFitnessPoints,
  rewardPoints,
  setRewardPoints,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || null;

  const [showModal, setShowModal] = useState(false);
  const [redeemPoints, setRedeemPoints] = useState();
  console.log(fitnessPoints);
  useEffect(() => {
    if (state?.rewardsData) {
      toast.success(`Rewards earned!!!${state?.rewardsData.rewardPoints}`);
    }
  }, [state?.rewardsData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const gotToLogin = () => {
    navigate("/login");
  };
  const handleInputChange = (e) => {
    if (Number(e.target.value) > rewardPoints) {
      window.alert("Redeem points must be less than reward points");
    } else setRedeemPoints(e.target.value);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRedeemRewards = async () => {
    try {
      const rewardsObject = await hackathonService.redeemRewards(
        12234,
        rewardPoints,
        redeemPoints
      );
      handleCloseModal();
      setRewardPoints(rewardPoints - redeemPoints);
      toast.success(rewardsObject.message);
      console.log(rewardsObject);
    } catch (err) {
      console.log(err);
    } finally {
      setRedeemPoints();
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <Row className="justify-content-center mt-4 mb-4">
        <Col
          lg={6}
          className="text-center"
          style={{
            font: "3rem Fira Sans, sans-serif",
            backgroundColor: "purple",
          }}
        >
          <span style={{ color: "white" }}>Natwest Rewards</span>
        </Col>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <div style={{ color: "purple", fontSize: "1.4rem" }}>
            <strong>Reward Points:{rewardPoints}</strong>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Card
            className="text-center"
            style={{
              width: "18rem",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
          >
            <Card.Body>
              <Card.Title>Earn rewards With FitApp Points</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                style={{
                  backgroundColor: "purple",
                  borderColor: "purple",
                }}
                size="lg"
                onClick={gotToLogin}
              >
                Get Your NW Rewards
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card
            className="text-center"
            style={{
              width: "18rem",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
          >
            <Card.Body>
              <Card.Title>Transfer to Reward Account</Card.Title>
              <Card.Text>
                The NatWest Reward bank account is similar to a cashback bank
                account – but it's a bit more flexible.
              </Card.Text>
              <Button
                style={{
                  backgroundColor: "purple",
                  borderColor: "purple",
                }}
                size="lg"
                onClick={handleOpenModal}
              >
                Convert
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card
            className="text-center"
            style={{
              width: "18rem",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
          >
            <Card.Body>
              <Card.Title>Buy discounted FitApp subscription</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                style={{
                  backgroundColor: "purple",
                  borderColor: "purple",
                }}
                size="lg"
              >
                Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card
            className="text-center"
            style={{
              width: "18rem",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
          >
            <Card.Body>
              <Card.Title>BNPL available with FitApp Partners</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                style={{
                  backgroundColor: "purple",
                  borderColor: "purple",
                }}
                size="lg"
              >
                Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "purple" }}>Convert Rewards</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter the points that you want to convert to Natwest Rewards:</p>
          <div className="inputContainer">
            <input
              type="text"
              className="form-control"
              id="RedeemPoints"
              placeholder="Enter the points in the Multiple of 100's"
              value={redeemPoints}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "purple",
              borderColor: "purple",
              color: "white",
            }}
            onClick={handleCloseModal}
          >
            Close
          </Button>
          <Button
            style={{
              backgroundColor: "purple",
              borderColor: "purple",
              color: "white",
            }}
            onClick={handleRedeemRewards}
          >
            Convert
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Rewards;
