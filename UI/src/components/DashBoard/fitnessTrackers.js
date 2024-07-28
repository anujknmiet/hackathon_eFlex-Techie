import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import walking from "../../img/walking.jpeg";
import running from "../../img/running.jpeg";
import swimming from "../../img/swimming.jpeg";

function FitnessTrackers() {
  return (
    <CardGroup className="text-center">
      <Card>
        <div className="img-container">
          <Card.Img variant="top" src={walking} className="card-img" />
        </div>
        <Card.Body>
          <Card.Title>Walking</Card.Title>
          <Card.Text>Your Progress</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="img-container">
          <Card.Img variant="top" src={running} className="card-img" />
        </div>
        <Card.Body>
          <Card.Title>Running</Card.Title>
          <Card.Text>Your Progress</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="img-container">
          <Card.Img variant="top" src={swimming} className="card-img" />
        </div>
        <Card.Body>
          <Card.Title>Swimming</Card.Title>
          <Card.Text>Your Progress</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default FitnessTrackers;
