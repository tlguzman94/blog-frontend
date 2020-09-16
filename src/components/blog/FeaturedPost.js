import React from 'react';
import { Container } from 'react-bootstrap';
import Post from './Post';

const post = {
  title: 'Sights And Attractions near Camden Lock Market',
  author: 'Tony Guzman',
  body:
    'Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works. Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works. Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works. Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works. Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works. Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works. Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works.',
  createdAt: 'June 13, 2018',
};

function FeaturedPost() {
  return (
    <Container fluid="md" className="my-5">
      <p className="text-primary lead text-center text-underline">
        Featured Post
      </p>
      <Post post={post} />
    </Container>
  );
}

export default FeaturedPost;
