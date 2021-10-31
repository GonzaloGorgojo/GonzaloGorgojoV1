import { Navbar, Nav, Container } from "react-bootstrap";

export function Header() {
  return (
    <Container className="mt-4" id="containerNavbar">
      <Navbar expand={false} sticky="top" variant="dark">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav id="navLinks">
            <Nav.Link className="text-white " href="#about">
              About
            </Nav.Link>
            <Nav.Link className="text-white " href="#experience">
              Experience
            </Nav.Link>
            <Nav.Link className="text-white " href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="text-white " href="#skills">
              Skills
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
