import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import PostList from './components/blog/PostList';
import FeaturedPost from './components/blog/FeaturedPost';
import PostHelper from './components/blog/PostHelper';
import About from './components/pages/About';
import NoMatch from './components/pages/NoMatch';
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

  const handleCreateComment = async (postID, comment) => {
    const updatedPost = await api.createComment(postID, comment);
    if (updatedPost) {
      setPosts(posts.map((post) => (post._id === postID ? updatedPost : post)));
    }
  };

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
            <PostHelper posts={posts} createComment={handleCreateComment} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
