import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InventoryPage extends Component {
  state = {};

  render() {
    return (
      <div className="inventory-page-wrapper">
        <div>Inventory</div>
        <Link to="/add-inventory">
          <button>Add Inventory</button>
        </Link>
      </div>
    );
  }
}

export default InventoryPage;
