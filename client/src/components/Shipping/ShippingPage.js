import React, { Component } from 'react';
import axios from 'axios';
import ShippingInfoInputs from './ShippingInfoInputs';
import ShippingInfoTable from './ShippingInfoTable';
import './Shipping.css';

class ShippingPage extends Component {
  state = {
    shippingData: [],
    date: new Date().toISOString().split('T')[0],
    trackingNumber: '',
    cost: '',
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  resetShippingInfoInputs = () => {
    this.setState({
      date: '',
      trackingNumber: '',
      cost: '',
    });
  };

  handleSubmit = async (e) => {
    const { date, trackingNumber, cost } = this.state;
    e.preventDefault();
    const dataToSubmit = {
      date,
      trackingNumber,
      cost: parseFloat(cost),
    };
    try {
      let response = await axios.post('/api/shipping', dataToSubmit);
      if (response.data.success) {
        this.getShippingData();
        this.resetShippingInfoInputs();
      } else {
        // Display warning to user
      }
    } catch (err) {
      console.log(err);
    }
  };

  getShippingData = async () => {
    const response = await axios.get('/api/shipping');
    const { shippingData } = response.data;
    this.setState({ shippingData });
  };

  componentDidMount() {
    this.getShippingData();
  }

  render() {
    return (
      <div className="shipping-page-wrapper">
        <ShippingInfoInputs
          date={this.state.date}
          trackingNumber={this.state.trackingNumber}
          cost={this.state.cost}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          resetShippingInfoInputs={this.resetShippingInfoInputs}
        />
        <ShippingInfoTable shippingData={this.state.shippingData} />
      </div>
    );
  }
}

export default ShippingPage;
