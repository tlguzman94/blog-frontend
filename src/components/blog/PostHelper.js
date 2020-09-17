import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Post from './Post';
import NoMatch from '../pages/NoMatch';

function PostHelper({ posts, createComment }) {
  const { postID } = useParams();
  const post = posts.find((post) => post._id === postID);

  if (post) {
    return (
      <Container fluid="md" className="my-5">
        <Post post={post} createComment={createComment} />
      </Container>
    );
  } else {
    return <NoMatch />;
  }
}

export default PostHelper;
