import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PostPreview from './PostPreview';

function PostList({ posts }) {
  return (
    <Container fluid="md" className="my-5">
      <p className="text-primary lead text-center text-underline">All Posts</p>
      <Row className="justify-content-between">
        {posts &&
          posts.map((post) => (
            <Col key={post._id} sm={12} md={6} lg={5} className="mb-3">
              <PostPreview post={post} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default PostList;
