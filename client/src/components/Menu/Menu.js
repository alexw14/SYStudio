import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="top-menu">
      <Link to="/shipping">Shipping</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/ordertracker">Tracker</Link>
    </div>
  );
};

export default Menu;
