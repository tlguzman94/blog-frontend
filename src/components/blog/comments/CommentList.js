import React from 'react';
import moment from 'moment';
import { Container } from 'react-bootstrap';

function CommentList({ comments }) {
  return (
    <div className="mt-4">
      <h4 className="font-weight-bold border-top d-inline-block">Comments</h4>
      <Container>
        {comments.length ? (
          comments.map((comment) => (
            <div key={comment._id} className="my-2">
              <h6 className="text-primary font-weight-bold text-capitalize">
                {comment.author}
                <small className="text-muted">{` ${moment(comment.date).format(
                  'MMMM D, YYYY'
                )}`}</small>
              </h6>
              <p className="m-0">{comment.body}</p>
            </div>
          ))
        ) : (
          <p className="text-muted m-0">
            No comments yet. Be the first to comment.
          </p>
        )}
      </Container>
    </div>
  );
}

export default CommentList;
