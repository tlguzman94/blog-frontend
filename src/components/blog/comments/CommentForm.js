import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function CommentForm({ createComment, postID }) {
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (author.length) {
      createComment(postID, { author, body });
    } else {
      createComment(postID, { body });
    }
    setAuthor('');
    setBody('');
  };

  return (
    <div className="bg-light my-4 p-5">
      <h4 className="font-weight-bold">Leave a Comment</h4>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="commentAuthor">
          <Form.Control
            type="text"
            placeholder="Author"
            onChange={(event) => setAuthor(event.target.value)}
            value={author}
          />
          <Form.Text className="text-muted">
            Leave Author field empty to remain anonymous
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="commentBody">
          <Form.Control
            as="textarea"
            placeholder="Comment"
            rows="3"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Post Comment
        </Button>
      </Form>
    </div>
  );
}

export default CommentForm;
