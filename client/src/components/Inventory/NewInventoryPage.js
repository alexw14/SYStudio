import React, { Component } from 'react';
import axios from 'axios';

class NewInventoryPage extends Component {
  state = {
    name: '',
    sku: '',
    costOfGoods: 0,
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const dataToSubmit = this.state;
    this.postNewInventoryData(dataToSubmit);
  };

  postNewInventoryData = async (data) => {
    try {
      let response = await axios.post('/api/inventory', data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Sku:</label>
          <input
            type="text"
            name="sku"
            value={this.state.sku}
            onChange={this.handleChange}
          />
          <label>Cost of Goods:</label>
          <input
            type="number"
            name="costOfGoods"
            value={this.state.costOfGoods}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewInventoryPage;
