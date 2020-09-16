import React from 'react';
import { Container } from 'react-bootstrap';
const post = {
  title: 'Sights And Attractions near Camden Lock Market',
  author: 'Tony Guzman',
  body:
    'Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works. Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works. Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works. Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works. Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works. Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works. Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works.',
  createdAt: 'June 13, 2018',
};

function FeaturedPost() {
  return (
    <Container className="my-5">
      <h1 className="display-4">Featured Post</h1>
      <hr />
      <div className="my-5">
        <h2>{post.title}</h2>
        <p className="text-muted">{`${post.author} - ${post.createdAt}`}</p>
        <p>{post.body}</p>
      </div>
    </Container>
  );
}

export default FeaturedPost;
