import React, { Component } from 'react';
import axios from 'axios';
import InventoryTable from './InventoryTable';
import InventoryInputs from './InventoryInputs';

import './Inventory.css';

class InventoryPage extends Component {
  state = {
    inventories: [],
    name: '',
    sku: '',
    category: '',
    costOfGoods: '',
    errorMessage: '',
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  resetInventoryInputs = () => {
    this.setState({
      name: '',
      sku: '',
      category: '',
      costOfGoods: '',
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, sku, category, costOfGoods } = this.state;
    const dataToSubmit = {
      name,
      sku,
      category,
      costOfGoods: parseFloat(costOfGoods),
    };
    const response = await this.postInventoryData(dataToSubmit);
    if (response.data.success) {
      this.getInventoryData();
      this.resetInventoryInputs();
      this.setState({ errorMessage: '' });
    } else {
      this.setState({ errorMessage: response.data.message });
    }
  };

  postInventoryData = async (dataToSubmit) => {
    try {
      const response = await axios.post('/api/inventory', dataToSubmit);
      return response;
    } catch (err) {
      console.error(err);
    }
  };

  getInventoryData = async () => {
    try {
      const response = await axios.get('/api/inventory');
      const { inventories } = response.data;
      this.setState({ inventories });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.getInventoryData();
  }

  render() {
    return (
      <div className="inventory-page-wrapper">
        <InventoryInputs
          name={this.state.name}
          sku={this.state.sku}
          category={this.state.category}
          costOfGoods={this.state.costOfGoods}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          resetInventoryInputs={this.resetInventoryInputs}
        />
        <InventoryTable inventories={this.state.inventories} />
      </div>
    );
  }
}

export default InventoryPage;
