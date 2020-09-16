import React from 'react';

function PostPreview({ post }) {
  return (
    <div className="d-flex flex-column my-2">
      <h4>{post.title}</h4>
      <p className="text-muted">{`${post.author} - ${post.createdAt}`}</p>
      <p>{post.body}</p>
      <a href="#link">Continue Reading</a>
    </div>
  );
}

export default PostPreview;
