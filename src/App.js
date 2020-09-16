import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import PostList from './components/blog/PostList';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Navigation />

        <Switch>
          <Route path="/">Homepage</Route>
          <Route path="/posts">
            <PostList />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
