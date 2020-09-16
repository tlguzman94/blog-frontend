import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import PostList from './components/blog/PostList';
import FeaturedPost from './components/blog/FeaturedPost';
import Post from './components/blog/Post';
import { Container } from 'react-bootstrap';

const post = {
  _id: 1,
  title: 'Sights And Attractions near Camden Lock Market',
  author: 'Tony Guzman',
  body:
    'Camden Lock is a small part of Camden Town, London Borough of Camden, England, which was formerly a wharf with stables on the Regent’s Canal. It is immediate to the north of Hampstead Road Locks, a twin operated the lock works.',
  createdAt: 'June 13, 2018',
};

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <FeaturedPost />
          </Route>
          <Route exact path="/posts">
            <PostList />
          </Route>
          <Route path="/posts/:id">
            <Container fluid="md" className="my-5">
              <Post post={post} />
            </Container>
          </Route>
          <Route path="/about">About</Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
