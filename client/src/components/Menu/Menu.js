import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = (props) => {
  const { user, handleLogout } = props;
  return (
    <div className="top-menu">
      {user ? (
        <React.Fragment>
          <Link to="/">Home</Link>
          <Link to="/ordertracker">Order Tracker</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/shipping">Shipping</Link>
          <a role="button" onClick={() => handleLogout()}>
            Log Out
          </a>
        </React.Fragment>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </div>
  );
};

export default Menu;
