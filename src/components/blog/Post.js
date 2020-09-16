import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Post({ post }) {
  return (
    <Row className="justify-content-center">
      <Col md={12} lg={10}>
        <h2 className="text-center font-weight-bold">{post.title}</h2>
        <p className="text-center text-muted">{`${post.author} - ${post.createdAt}`}</p>
        <p className="py-4">{post.body}</p>
      </Col>
    </Row>
  );
}

export default Post;
