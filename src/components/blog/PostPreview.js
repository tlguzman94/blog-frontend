import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function PostPreview({ post }) {
  const { url } = useRouteMatch();
  return (
    <div className="d-flex flex-column my-2">
      <h4>{post.title}</h4>
      <p className="text-muted">{`${post.author} - ${post.createdAt}`}</p>
      <p>{post.body.substring(0, 150)}</p>
      <Link to={`${url}/${post._id}`}>Continue Reading</Link>
    </div>
  );
}

export default PostPreview;
