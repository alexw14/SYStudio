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
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
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
        />
        <InventoryTable inventories={this.state.inventories}/>
      </div>
    );
  }
}

export default InventoryPage;
