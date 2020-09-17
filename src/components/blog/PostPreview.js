import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useRouteMatch } from 'react-router-dom';
import moment from 'moment';

function PostPreview({ post }) {
  const { url } = useRouteMatch();
  return (
    <div className="post-preview d-flex flex-column my-2">
      <ReactMarkdown source={post.title} />
      <p className="text-muted text-capitalize">{`${post.user.first_name} ${
        post.user.last_name
      } - ${moment(post.createdAt).format('MMMM D, YYYY')}`}</p>
      <ReactMarkdown source={post.body.substring(0, 150)} />
      <Link to={`${url}/${post._id}`}>Continue Reading</Link>
    </div>
  );
}

export default PostPreview;
