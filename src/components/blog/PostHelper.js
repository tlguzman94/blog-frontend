import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Post from './Post';

function PostHelper({ posts }) {
  const { postID } = useParams();
  const post = posts.find((post) => post._id === postID);

  if (post) {
    return (
      <Container fluid="md" className="my-5">
        <Post post={post} />
      </Container>
    );
  } else {
    return <div>no post found</div>;
  }
}

export default PostHelper;
