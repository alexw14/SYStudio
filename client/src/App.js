import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import OrderTrackerPage from './components/OrderTrackerPage/OrderTrackerPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/ordertracker" component={OrderTrackerPage} />
      </BrowserRouter>
    );
  }
}

export default App;
