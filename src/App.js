import React from 'react';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
