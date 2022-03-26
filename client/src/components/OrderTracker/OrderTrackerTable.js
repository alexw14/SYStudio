import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import OrderTrackerTableRow from './OrderTrackerTableRow';

const OrderTrackerTable = (props) => {
  const { orders } = props;

  const generateTableRow = () => {
    return orders.map((order) => {
      return <OrderTrackerTableRow key={order.orderId} row={order} />;
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Sale Date</TableCell>
            <TableCell>Order Id</TableCell>
            <TableCell>Sales Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{generateTableRow()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTrackerTable;
