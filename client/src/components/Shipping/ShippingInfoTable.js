import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
} from '@chakra-ui/react';

const ShippingInfoTable = (props) => {
  const { shippingData, selectedMonthAndYear, handleClick } = props;

  const filterFn = (item) => {
    return (
      item.date.split('T')[0].includes(selectedMonthAndYear) ||
      selectedMonthAndYear === ''
    );
  };

  const calculateTotalCost = (data) => {
    return data.reduce((prev, curr) => prev + curr.cost, 0);
  };

  const generateTable = (data) => {
    const tableData = data.filter(filterFn);
    const totalCost = calculateTotalCost(tableData);
    return (
      <TableContainer className="shipping-info-table-container">
        <Table variant="striped" className="shipping-info-table" size="md">
          <TableCaption placement="top" className="total">
            Total shipping cost: ${totalCost}
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Shipping Date</Th>
              <Th>Order ID</Th>
              <Th>Tracking Number</Th>
              <Th>Cost</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((d) => {
              return (
                <Tr key={d.orderId} onClick={() => handleClick(d)}>
                  <Td>{d.date ? d.date.split('T')[0] : 'N/A'}</Td>
                  <Td>{d.orderId}</Td>
                  <Td>{d.trackingNumber}</Td>
                  <Td>${d.cost ? d.cost : 0}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    );
  };

  return <React.Fragment>{generateTable(shippingData)}</React.Fragment>;
};

export default ShippingInfoTable;
