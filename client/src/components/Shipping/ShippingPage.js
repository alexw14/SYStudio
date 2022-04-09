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
    errorMessage: '',
    isAddOrEdit: 'add',
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
      errorMessage: '',
      isAddOrEdit: 'add',
    });
  };

  handleClickAddEditBtn = (condition) => {
    const isAddOrEdit = condition === 'add' ? 'add' : 'edit';
    this.setState({ isAddOrEdit });
  };

  handleClickTrackingNumber = (rowData) => {
    const date = rowData.date ? rowData.date.split('T')[0] : '';
    const trackingNumber = rowData.trackingNumber;
    const cost = rowData.cost ? rowData.cost : 0;
    this.setState({
      date,
      trackingNumber,
      cost,
      errorMessage: '',
      isAddOrEdit: 'edit',
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
    const response = await this.postShippingData(dataToSubmit);
    if (response.data.success) {
      this.getShippingData();
      this.resetShippingInfoInputs();
      this.setState({ errorMessage: '' });
    } else {
      this.setState({ errorMessage: response.data.message });
    }
  };

  updateShippingData = async (dataToSubmit) => {};

  postShippingData = async (dataToSubmit) => {
    try {
      let response = await axios.post('/api/shipping', dataToSubmit);
      return response;
    } catch (err) {
      console.error(err);
    }
  };

  getShippingData = async () => {
    try {
      const response = await axios.get('/api/shipping');
      const { shippingData } = response.data;
      this.setState({ shippingData });
    } catch (err) {
      console.error(err);
    }
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
          errorMessage={this.state.errorMessage}
          isAddOrEdit={this.state.isAddOrEdit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          resetShippingInfoInputs={this.resetShippingInfoInputs}
          handleClickAddEditBtn={this.handleClickAddEditBtn}
        />
        <ShippingInfoTable
          shippingData={this.state.shippingData}
          handleClick={this.handleClickTrackingNumber}
        />
      </div>
    );
  }
}

export default ShippingPage;
