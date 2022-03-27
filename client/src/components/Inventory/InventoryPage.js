import React, { Component } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import "./InventoryPage.css";

class InventoryPage extends Component {
  state = {
    inventories: [],
  };

  getInventoryData = async () => {
    const response = await axios.get('/api/inventory');
    const { inventories } = response.data;
    this.setState({ inventories });
  };

  generateTable = () => {
    const { inventories } = this.state;
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventories.map((row) => {
              return (
                <TableRow key={row.sku}>
                  <TableCell>{row.sku}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>${row.costOfGoods}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  componentDidMount() {
    this.getInventoryData();
  }

  render() {
    return (
      <div className="inventory-page-wrapper">
        {this.state.inventories.length > 0 ? (
          this.generateTable()
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

export default InventoryPage;
