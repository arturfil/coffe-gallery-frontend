import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isAuthenticated, logOut } from "../services/authService";

import "./NavBar.css";

const NavBar = () => {
  const user = isAuthenticated(); // set user = userObject

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Coffee Gallery</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            <Link to="/">Home</Link>
            {
              user.role === "ADMIN" && (
                <>
                  <Link to="/beans">Beans</Link>
                  <Link to="/addCoffee">Add Coffee</Link>
                  <Link to="/addBean">Add Bean</Link>
                </>
              )
            }
          </Nav>
          <Nav className="links">
            {user ? (
              <>
                <a style={{color: "white", margin: '8px'}}>
                  Welcome, {user.name}
                </a>
                <button onClick={logOut} className="btn btn-outline-dark">
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
