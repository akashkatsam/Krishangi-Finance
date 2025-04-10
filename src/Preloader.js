// src/components/Preloader.js
import React from 'react';
import loader from './Maim-tree_00000_4.gif'
const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Preloader;
