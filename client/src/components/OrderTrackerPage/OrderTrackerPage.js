import React, { Component } from 'react';
import axios from 'axios';

import OrderTrackerDropDown from '../OrderTrackerDropDown/OrderTrackerDropDown';
import OrderTrackerTable from '../OrderTrackerTable/OrderTrackerTable';

class OrderTrackerPage extends Component {
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

  handleDropDownSelection = (monthAndYear) => {
    this.setState({ monthAndYear });
  };

  componentDidMount() {
    this.getOrderHistoryData();
  }

  render() {
    const { monthAndYear, orders } = this.state;
    return (
      <div>
        <div>{monthAndYear ? monthAndYear : 'Loading...'}</div>
        <OrderTrackerDropDown
          handleDropDownSelection={this.handleDropDownSelection}
        />
        <OrderTrackerTable orders={orders} />
      </div>
    );
  }
}

export default OrderTrackerPage;
