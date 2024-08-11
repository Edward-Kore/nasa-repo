// Import Bootstrap modules
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { FaShuttleSpace } from "react-icons/fa6";

const Header = () => {
  return (
    <Navbar className="navigation" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaShuttleSpace
            className="mb-1"
            style={{ color: "#ffbf1a", fontSize: "40px" }}
          />{" "}
          NASA-Git
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/github">
              Github
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
