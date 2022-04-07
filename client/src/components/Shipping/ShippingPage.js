import React, { Component } from 'react';
import axios from 'axios';
import ShippingInfoInputs from './ShippingInfoInputs';
import "./Shipping.css";

class ShippingPage extends Component {
  state = {
    shippingData: [],
  };

  getShippingData = async () => {
    const response = await axios.get('/api/shipping');
    console.log(response);
  }

  componentDidMount() {
    this.getShippingData();
  }

  render() {
    return (
      <div className="shipping-page-wrapper">
        <ShippingInfoInputs />
      </div>
    );
  }
}

export default ShippingPage;
