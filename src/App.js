import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import PostList from './components/blog/PostList';
import FeaturedPost from './components/blog/FeaturedPost';
import Post from './components/blog/Post';
import About from './components/pages/About';
import { Container } from 'react-bootstrap';

import api from './api';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await api.getPosts();
      if (posts) {
        setPosts(posts);
      }
    };
    getPosts();
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <FeaturedPost post={posts[0]} />
          </Route>
          <Route exact path="/posts">
            <PostList posts={posts} />
          </Route>
          <Route path="/posts/:postID">
            <Container fluid="md" className="my-5">
              <Post posts={posts} />
            </Container>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
