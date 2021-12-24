import React, { Component } from 'react';
import axios from 'axios';

class Tracker extends Component {
  state = {
    monthAndYear: null,
    orders: [],
    error: null,
  };

  getOrderHistoryData = async () => {
    try {
      let response = await axios.get('/api/orderhistory?monthAndYear=1121');
      let { monthAndYear, orders } = response.data.orderHistory;
      this.setState({
        monthAndYear,
        orders,
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  componentDidMount() {
    this.getOrderHistoryData();
  }

  render() {
    const { monthAndYear } = this.state;
    return <div>{monthAndYear ? monthAndYear : 'Loading...'}</div>;
  }
}

export default Tracker;
