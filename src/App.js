


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Aboutpage from './Aboutpage';
import Contact from './Contact';
import Servicepage from './Servicepage';
function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Servicepage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about" element={<Aboutpage />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
