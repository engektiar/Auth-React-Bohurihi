import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navber() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to={"/home"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to={"/Login"}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to={"/logout"}>
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navber;
