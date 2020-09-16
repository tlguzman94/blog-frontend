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
        <Nav.Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </Nav.Link>
        <Nav.Link
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Nav.Link>
        <Nav.Link
          href="https://www.Youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </Nav.Link>
        <Nav.Link
          href="https://www.Github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Nav.Link>
      </Nav>
      <Navbar.Text>Created using React</Navbar.Text>
    </Navbar>
  );
}

export default Footer;
