import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './components/Landing/LandingPage';
import LoginPage from './components/Login/LoginPage';
import Menu from './components/Menu/Menu';
// import OrderTrackerPage from './components/OrderTracker/OrderTrackerPage';
import InventoryPage from './components/Inventory/InventoryPage';
import ShippingPage from './components/Shipping/ShippingPage';

import { removeToken, parseJwt } from './utils/tokenService';
import './App.css';

class App extends Component {
  state = {
    user: null,
  };

  handleLogin = (token) => {
    const payload = parseJwt(token);
    this.setState({ user: payload.user });
  };

  handleLogout = (user) => {
    removeToken();
    this.setState({ user: null });
  };

  render() {
    return (
      <BrowserRouter>
        <Menu />
        <React.Fragment>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route
            exact
            path="/login"
            render={(props) => (
              <LoginPage {...props} handleLogin={this.handleLogin} />
            )}
          />
          <Route exact path="/inventory">
            <InventoryPage />
          </Route>
          <Route exact path="/shipping">
            <ShippingPage />
          </Route>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
