import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './components/Landing/LandingPage';
import LoginPage from './components/Login/LoginPage';
import Menu from './components/Menu/Menu';
// import OrderTrackerPage from './components/OrderTracker/OrderTrackerPage';
import InventoryPage from './components/Inventory/InventoryPage';
import ShippingPage from './components/Shipping/ShippingPage';

import { getUserFromToken, removeToken } from './utils/tokenService';
import './App.css';

class App extends Component {
  state = {
    user: null,
  };

  handleLogin = () => {
    const user = getUserFromToken();
    if (user) {
      this.setState({ user });
    }
  };

  handleLogout = () => {
    removeToken();
    this.setState({ user: null });
  };

  componentDidMount() {
    this.handleLogin();
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
              render={(props) =>
                !getUserFromToken() ? (
                  <LoginPage {...props} handleLogin={this.handleLogin} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route exact path="/inventory">
              {getUserFromToken() ? (
                <InventoryPage />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path="/shipping">
              {getUserFromToken() ? <ShippingPage /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
