import React, { Component } from 'react';
import axios from 'axios';
import InventoryTable from './InventoryTable';
import InventoryInputs from './InventoryInputs';
import InventoryFilter from './InventoryFilter';

import './Inventory.css';

class InventoryPage extends Component {
  state = {
    inventories: [],
    name: '',
    sku: '',
    category: '',
    costOfGoods: '',
    errorMessage: '',
    isAddOrEdit: 'add',
    filter: {},
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleClickAddEditBtn = (condition) => {
    const isAddOrEdit = condition === 'add' ? 'add' : 'edit';
    this.setState({ isAddOrEdit });
  };

  handleTableRowClick = (rowData) => {
    const { name, sku, category, costOfGoods } = rowData;
    this.setState({
      name,
      sku,
      category,
      costOfGoods,
      isAddOrEdit: 'edit',
    });
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  resetInventoryInputs = () => {
    this.setState({
      name: '',
      sku: '',
      category: '',
      costOfGoods: '',
      errorMessage: '',
      isAddOrEdit: 'add',
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, sku, category, costOfGoods, isAddOrEdit } = this.state;
    const dataToSubmit = {
      name,
      sku,
      category,
      costOfGoods: parseFloat(costOfGoods),
    };
    if (isAddOrEdit === 'add') {
      const response = await this.postInventoryData(dataToSubmit);
      if (response.data.success) {
        this.successPostRequest();
      } else {
        this.setState({ errorMessage: response.data.message });
      }
    } else if (isAddOrEdit === 'edit') {
      const response = await this.updateInventoryData(dataToSubmit);
      if (response.data.success) {
        this.successPostRequest();
      } else {
        this.setState({ errorMessage: response.data.message });
      }
    }
  };

  successPostRequest = () => {
    this.getInventoryData();
    this.resetInventoryInputs();
    this.setState({ errorMessage: '' });
  };

  updateInventoryData = async (dataToSubmit) => {
    try {
      const url = `/api/inventories/edit/${dataToSubmit.sku}`;
      let response = await axios.post(url, dataToSubmit);
      return response;
    } catch (err) {
      console.error(err);
    }
  };

  postInventoryData = async (dataToSubmit) => {
    try {
      const response = await axios.post('/api/inventories', dataToSubmit);
      return response;
    } catch (err) {
      console.error(err);
    }
  };

  getInventoryData = async () => {
    try {
      const response = await axios.get('/api/inventories');
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
          isAddOrEdit={this.state.isAddOrEdit}
          errorMessage={this.state.errorMessage}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          resetInventoryInputs={this.resetInventoryInputs}
          handleClickAddEditBtn={this.handleClickAddEditBtn}
        />
        <InventoryFilter handleFilter={this.handleFilter}/>
        <InventoryTable
          inventories={this.state.inventories}
          filter={this.state.filter}
          handleTableRowClick={this.handleTableRowClick}
        />
      </div>
    );
  }
}

export default InventoryPage;
