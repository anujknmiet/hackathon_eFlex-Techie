import Header from "../header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Rewards = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { rewardsData } = location.state || null;
  const { athleteId, customerId, rewardPoints } = rewardsData;
  useEffect(() => {
    if (rewardsData) {
      window.alert(`Rewards earned!!!${rewardPoints}`);
    }
  }, []);
  useEffect(() => {
    if (rewardsData) {
      toast.success(`Rewards earned: ${rewardPoints}`);
    }
  }, [rewardsData]);

  const gotToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <Header />
      {/* <ToastContainer /> */}
      <Row className="justify-content-center mt-4 mb-4">
        <Col
          lg={6}
          style={{ textAlign: "center", font: "3rem Fira Sans, sans-serif" }}
        >
          My Rewards
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
              <Card.Title>Earn rewards With Strava Awards</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link onClick={gotToLogin}>Cash Your Rewards</Card.Link>
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
              <Card.Title>Redeem Rewards</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. make up the bulk of the card's
                content.
              </Card.Text>
              <Card.Link href="#">Redeem</Card.Link>
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
              <Card.Title>Buy discounted Strava subscription</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Buy</Card.Link>
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
              <Card.Title>BYPL available with Strava Partners</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Buy</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Rewards;
