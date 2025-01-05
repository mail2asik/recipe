import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ user }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>RECIPES</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/recipes">
            Recipes
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
        <Nav>
          {!user && (
            <>
              <Nav.Link as={Link} to="/auth/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/auth/register">
                Register
              </Nav.Link>
            </>
          )}

          {user && (
            <>
              <Navbar.Text>
                Welcome {user.name}! | <Link to="/dashboard">Dashboard</Link> | <Link to="/auth/logout">Logout</Link>
              </Navbar.Text>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
