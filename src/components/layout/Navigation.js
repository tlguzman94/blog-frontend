import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar variant="light" expand="sm" className="container-lg py-3">
      <Link to="/" className="navbar-brand">
        React Blog
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/posts" className="nav-link">
            Posts
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
