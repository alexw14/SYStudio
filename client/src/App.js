import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import Tracker from './components/Tracker/Tracker';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/tracker" component={Tracker} />
      </BrowserRouter>
    );
  }
}

export default App;
