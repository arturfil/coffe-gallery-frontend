import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            Coffee Gallery
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            <Link to="/">Home</Link>
            <Link to="/beans">Beans</Link>
            <Link to="/beans">Add Coffee</Link>
            <Link to="/beans">Add Bean</Link>
          </Nav>
          <Nav className="links">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
