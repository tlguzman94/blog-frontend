import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Post({ post }) {
  return (
    <Container fluid className="mb-5">
      <Row className="justify-content-center">
        <Col md={12} lg={8}>
          <h2 className="text-center font-weight-bold">{post.title}</h2>
          <p className="text-center text-muted">{`${post.author} - ${post.createdAt}`}</p>
          <p className="p-4">{post.body}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Post;
