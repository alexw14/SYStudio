import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './components/Landing/LandingPage';
import LoginPage from './components/Login/LoginPage';
import Menu from './components/Menu/Menu';
// import OrderTrackerPage from './components/OrderTracker/OrderTrackerPage';
import InventoryPage from './components/Inventory/InventoryPage';
import ShippingPage from './components/Shipping/ShippingPage';

import { getToken, removeToken, parseJwt } from './utils/tokenService';
import './App.css';

class App extends Component {
  state = {
    user: null,
  };

  handleLogin = (token) => {
    const payload = parseJwt(token);
    this.setState({ user: payload.user });
  };

  handleLogout = () => {
    removeToken();
    this.setState({ user: null });
  };

  componentDidMount() {
    const token = getToken();
    if (token) {
      this.handleLogin(token);
    }
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Menu user={this.state.user} handleLogout={this.handleLogout} />
          <Switch>
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
              {this.state.user ? <InventoryPage /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/shipping">
              {this.state.user ? <ShippingPage /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
