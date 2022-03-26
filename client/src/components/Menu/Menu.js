import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="top-menu">
      <Link to="/">Home</Link>
      <Link to="/ordertracker">Tracker</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/shipping">Shipping</Link>
    </div>
  );
};

export default Menu;
