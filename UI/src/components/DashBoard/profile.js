/* eslint-disable jsx-a11y/anchor-is-valid */
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import trophy from "../../img/trophy.png";
import gold from "../../img/gold medal.png";
import silver from "../../img/silver-medal.png";
import bronze from "../../img/bronze medal.png";
import { useNavigate } from "react-router-dom";
import NatwestLogo from "../../img/Natwest_logo.jfif";
import "../../CSS/profile.css";
function Profile({ fitnessPoints }) {
  const navigate = useNavigate();
  const goToRewards = () => {
    navigate("/rewards");
  };
  return (
    <>
      <Row className="justify-content-center">
        <Col>
          <Card
            className="text-center myCard"
            style={{
              width: "22rem",
              backgroundColor: "#F5F5F5",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  color: "#FC5200",
                  marginBottom: "2rem",
                  marginTop: "2rem",
                  fontSize: "2rem",
                }}
              >
                My Achievements
              </Card.Title>
              <Card.Text style={{ marginBottom: "2rem" }}>
                <Row>
                  <Col>
                    <div
                      style={{
                        font: "1.6rem Fira Sans, sans-serif",
                        color: "#FC5200",
                      }}
                    >
                      Fitness Points
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "2rem" }}>
                  <Col>
                    <div style={{ fontSize: "1.4rem", color: "#FC5200" }}>
                      {fitnessPoints} pts
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ color: "#FC5200" }}>Running</Col>
                  <Col style={{ color: "#FC5200" }}>Cycling</Col>
                  <Col style={{ color: "#FC5200" }}>Swimming</Col>
                </Row>

                <Row>
                  <Col>
                    <div className="medalContainer">
                      <img src={gold} alt="" />
                    </div>
                  </Col>
                  <Col>
                    <div className="medalContainer">
                      <img src={silver} alt="" />
                    </div>
                  </Col>
                  <Col>
                    <div className="medalContainer">
                      <img src={bronze} alt="" />
                    </div>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              marginTop: "2.5rem",
            }}
          >
            <div className="logoContainer" style={{ paddingRight: "0.5rem" }}>
              <img src={NatwestLogo} alt="" />
            </div>
            <Button
              style={{
                backgroundColor: "purple",
                borderColor: "purple",
              }}
              onClick={goToRewards}
              size="lg"
            >
              Natwest Rewards
            </Button>
          </div>
          <div
            className="natwestProducts"
            style={{ textAlign: "center", paddingTop: "1rem" }}
          >
            <a
              style={{ color: "purple", cursor: "pointer" }}
              onClick={() => {
                navigate("/products");
              }}
            >
              Explore Natwest products
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Profile;
