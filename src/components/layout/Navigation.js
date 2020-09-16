import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="light" variant="light" expand="sm">
      <Navbar.Brand href="#">React Blog</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Link to="/" className="p-2 text-secondary text-decoration-none">
            Home
          </Link>
          <Link to="/posts" className="p-2 text-secondary text-decoration-none">
            Posts
          </Link>
          <Link to="/about" className="p-2 text-secondary text-decoration-none">
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
