import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <Navbar expand="md" className="themecolor" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Navbar.Text style={{ color: "#FC5200" }}>Fitness App</Navbar.Text>
          </Nav>
          <Nav className="ms-5 me-5">
            <Nav.Link href="#home" style={{ color: "#FC5200" }}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
