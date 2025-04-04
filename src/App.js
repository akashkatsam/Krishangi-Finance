


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Aboutpage from './Aboutpage';

function App() {
  return (
    <Router>
      <div>
        <Header/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
