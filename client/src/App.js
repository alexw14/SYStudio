import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './components/Landing/LandingPage';
import Menu from './components/Menu/Menu';
// import OrderTrackerPage from './components/OrderTracker/OrderTrackerPage';
// import InventoryPage from './components/Inventory/InventoryPage';
// import NewInventoryPage from './components/Inventory/NewInventoryPage';
import ShippingPage from './components/Shipping/ShippingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <React.Fragment>
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/ordertracker" component={OrderTrackerPage} /> */}
          {/* <Route exact path="/inventory" component={InventoryPage} />
          <Route exact path="/inventory/add" component={NewInventoryPage} /> */}
          <Route exact path="/shipping" component={ShippingPage} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
