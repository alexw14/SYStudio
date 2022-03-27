import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';

import './NewInventoryPage.css';

class NewInventoryPage extends Component {
  state = {
    name: '',
    sku: '',
    costOfGoods: '',
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = this.state;
    this.postNewInventoryData(dataToSubmit);
  };

  handleResetState = () => {
    this.setState({
      name: '',
      sku: '',
      costOfGoods: '',
    });
  };

  postNewInventoryData = async (data) => {
    try {
      let response = await axios.post('/api/inventory', data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="add-inventory-wrapper">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <TextField
            label="Sku"
            variant="outlined"
            margin="normal"
            name="sku"
            value={this.state.sku}
            onChange={this.handleChange}
          />
          <TextField
            label="Cost of Goods"
            variant="outlined"
            margin="normal"
            name="costOfGoods"
            value={this.state.costOfGoods}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
          <button type="button" onClick={this.handleResetState}>
            Clear
          </button>
        </form>
      </div>
    );
  }
}

export default NewInventoryPage;
