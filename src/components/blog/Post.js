import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';
import CommentForm from './comments/CommentForm';
import CommentList from './comments/CommentList';

function Post({ post, createComment }) {
  return (
    <Row className="justify-content-center">
      <Col md={12} lg={10}>
        <ReactMarkdown
          className="text-center font-weight-bold"
          source={post.title}
        />
        <p className="text-center text-muted text-capitalize">{`${
          post.user.first_name
        } ${post.user.last_name} - ${moment(post.createdAt).format(
          'MMMM D, YYYY'
        )}`}</p>
        <ReactMarkdown source={post.body} />
        <CommentList comments={post.comments} />
        <CommentForm createComment={createComment} postID={post._id} />
      </Col>
    </Row>
  );
}

export default Post;
