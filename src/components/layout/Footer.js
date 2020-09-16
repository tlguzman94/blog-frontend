import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar
      bg="light"
      variant="light"
      className="justify-content-between mt-auto"
    >
      <Nav>
        <Nav.Link href="#">Facebook</Nav.Link>
        <Nav.Link href="#">Twitter</Nav.Link>
        <Nav.Link href="#">Youtube</Nav.Link>
        <Nav.Link href="#">Github</Nav.Link>
      </Nav>
      <Navbar.Text>Created using React</Navbar.Text>
    </Navbar>
  );
}

export default Footer;
