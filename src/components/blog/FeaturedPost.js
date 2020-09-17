import React from 'react';
import { Container } from 'react-bootstrap';
import Post from './Post';

function FeaturedPost({ post }) {
  return (
    <Container fluid="md" className="my-5">
      <p className="text-primary lead text-center text-underline">
        Featured Post
      </p>
      {post && <Post post={post} />}
    </Container>
  );
}

export default FeaturedPost;
