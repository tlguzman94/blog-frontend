import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PostPreview from './PostPreview';

const post = {
  title: 'Sights And Attractions near Camden Lock Market',
  author: 'Tony Guzman',
  body:
    'Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works.',
  createdAt: 'June 13, 2018',
};

function PostList() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <PostPreview post={post} />
        </Col>
        <Col sm={12} md={6}>
          <PostPreview post={post} />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <PostPreview post={post} />
        </Col>
        <Col sm={12} md={6}>
          <PostPreview post={post} />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <PostPreview post={post} />
        </Col>
        <Col sm={12} md={6}>
          <PostPreview post={post} />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <PostPreview post={post} />
        </Col>
      </Row>
    </Container>
  );
}

export default PostList;
