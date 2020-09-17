import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Col, Row } from 'react-bootstrap';

function Post({ post }) {
  return (
    <Row className="justify-content-center">
      <Col md={12} lg={10}>
        <ReactMarkdown
          className="text-center font-weight-bold"
          source={post.title}
        />
        <p className="text-center text-muted text-capitalize">{`${post.user.first_name} ${post.user.last_name} - ${post.createdAt}`}</p>
        <ReactMarkdown source={post.body} />
      </Col>
    </Row>
  );
}

export default Post;
