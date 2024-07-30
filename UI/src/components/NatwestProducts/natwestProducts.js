import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NatwestLogo from "../../img/Natwest_logo.jfif";
import ClipLoader from "react-spinners/ClipLoader";
import hackathonService from "../../services/hackathon.service";

const NatwestProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    hackathonService
      .getProducts()
      .then((resp) => {
        console.log(resp.data[0].brand[0]);
        setProducts(resp.data[0].brand[0].pca);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const selectedProducts = products
    .map((eachProduct) => {
      const productDescription =
        eachProduct.pcaMarketingState[0].coreProduct.productDescription;
      return {
        productName: eachProduct.name,
        productDescription: productDescription,
      };
    })
    .slice(0, 4);

  return (
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
      <Row className="justify-content-center mt-4 mb-4">
        <Col
          lg={6}
          style={{
            textAlign: "center",
            font: "2rem Fira Sans, sans-serif",
            backgroundColor: "purple",
          }}
        >
          <span style={{ color: "white" }}>Natwest Products</span>
        </Col>
      </Row>
      <Row>
        {loading ? (
          <Row className="justify-content-center">
            <ClipLoader
              strokeColor="purple"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </Row>
        ) : (
          selectedProducts.map((eachProduct, index) => (
            <Col key={index} className="d-flex justify-content-center mb-4">
              <Card
                className="text-center"
                style={{
                  width: "18rem",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              >
                <Card.Body
                  className="d-flex flex-column"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <Card.Title>{eachProduct.productName}</Card.Title>
                    <Card.Text>{eachProduct.productDescription}</Card.Text>
                  </div>
                  <Button
                    style={{
                      backgroundColor: "purple",
                      borderColor: "purple",
                      marginTop: "auto",
                    }}
                    size="lg"
                  >
                    Know More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <Row className="justify-content-center mt-4">
        <Col className="text-center">
          <Button
            onClick={() => navigate(-1)} // This will navigate to the previous page
            style={{
              backgroundColor: "purple",
              borderColor: "purple",
            }}
            size="lg"
          >
            Back
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default NatwestProducts;
