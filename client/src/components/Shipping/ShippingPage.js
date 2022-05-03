import React, { Component } from 'react';

import ShippingInfoInputs from './ShippingInfoInputs';
import ShippingInfoTable from './ShippingInfoTable';
import {
  getShippingData,
  addShippingData,
  updateShippingData,
} from '../../api/shippingAPI';
import './Shipping.css';

class ShippingPage extends Component {
  state = {
    shippingData: [],
    date: new Date().toISOString().split('T')[0],
    orderId: '',
    trackingNumber: '',
    cost: '',
    errorMessage: '',
    isAddOrEdit: 'add',
    selectedMonth: '',
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
      orderId: '',
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

  handleTableRowClick = (rowData) => {
    const date = rowData.date ? rowData.date.split('T')[0] : '';
    const orderId = rowData.orderId;
    const trackingNumber = rowData.trackingNumber;
    const cost = rowData.cost ? rowData.cost : 0;
    this.setState({
      date,
      orderId,
      trackingNumber,
      cost,
      errorMessage: '',
      isAddOrEdit: 'edit',
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { date, orderId, trackingNumber, cost, isAddOrEdit } = this.state;
    const dataToSubmit = {
      date,
      orderId,
      trackingNumber,
      cost: parseFloat(cost),
    };
    if (isAddOrEdit === 'add') {
      const response = await addShippingData(dataToSubmit);
      if (response.data.success) {
        this.handleSuccessSubmit();
      } else {
        this.setState({ errorMessage: response.data.message });
      }
    } else if (isAddOrEdit === 'edit') {
      const response = await updateShippingData(dataToSubmit);
      if (response.data.success) {
        this.handleSuccessSubmit();
      } else {
        this.setState({ errorMessage: response.data.message });
      }
    }
  };

  handleSuccessSubmit = () => {
    this.handleGetShippingData();
    this.resetShippingInfoInputs();
    this.setState({ errorMessage: '' });
  } 

  handleGetShippingData = async () => {
    const response = await getShippingData();
    const { shippingData } = response.data;
    this.setState({ shippingData });
  };

  componentDidMount() {
    this.handleGetShippingData();
  }

  render() {
    return (
      <div className="shipping-page-wrapper">
        <ShippingInfoInputs
          date={this.state.date}
          orderId={this.state.orderId}
          trackingNumber={this.state.trackingNumber}
          cost={this.state.cost}
          errorMessage={this.state.errorMessage}
          isAddOrEdit={this.state.isAddOrEdit}
          selectedMonth={this.state.selectedMonth}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          resetShippingInfoInputs={this.resetShippingInfoInputs}
          handleClickAddEditBtn={this.handleClickAddEditBtn}
        />
        <ShippingInfoTable
          shippingData={this.state.shippingData}
          selectedMonth={this.state.selectedMonth}
          handleClick={this.handleTableRowClick}
        />
      </div>
    );
  }
}

export default ShippingPage;
