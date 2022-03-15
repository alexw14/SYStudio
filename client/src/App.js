import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import OrderTrackerPage from './components/OrderTrackerPage/OrderTrackerPage';
import InventoryPage from './components/InventoryPage/InventoryPage';
import NewInventoryPage from './components/NewInventoryPage/NewInventoryPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/ordertracker" component={OrderTrackerPage} />
        <Route exact path="/inventory" component={InventoryPage} />
        <Route exact path="/add-inventory" component={NewInventoryPage} />
      </BrowserRouter>
    );
  }
}

export default App;
