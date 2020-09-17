import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <Container className="my-5 text-center">
      <h1 className="display-1">404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>
      <p>
        Go to
        <Link to="/"> Home Page</Link>
      </p>
    </Container>
  );
}

export default NoMatch;
