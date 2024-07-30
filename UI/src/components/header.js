import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToDashBoard = () => {
    navigate("/");
  };
  return (
    <Navbar expand="md" className="themecolor" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{ color: "#FC5200" }}>FitApp</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav.Link
            className="mx-auto"
            onClick={goToDashBoard}
            style={{ color: "#FC5200", marginLeft: "45%!important" }}
          >
            Home
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
