import React, { Component } from 'react';
import axios from 'axios';

import './Shipping.css';

class ShippingInfoInputs extends Component {
  state = {
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

  handleResetState = () => {
    this.setState({
      date: '',
      trackingNumber: '',
      cost: '',
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...this.state };
    dataToSubmit.cost = parseFloat(dataToSubmit.cost);
    try {
      let response = await axios.post('/api/shipping', dataToSubmit);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  generateShippingInputs = () => {
    return (
      <form
        className="shipping-inputs-form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div>
          <label>Shipping Date</label>
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label>Tracking Number</label>
          <input
            type="text"
            name="trackingNumber"
            value={this.state.trackingNumber}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label>Cost</label>
          <input
            type="text"
            name="cost"
            value={this.state.cost}
            onChange={this.handleChange}
          ></input>
        </div>
        <button type="submit">Add</button>
        <button type="button" onClick={this.handleResetState}>
          Clear
        </button>
      </form>
    );
  };

  render() {
    return <div>{this.generateShippingInputs()}</div>;
  }
}

export default ShippingInfoInputs;
