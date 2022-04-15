import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

const ShippingInfoTable = (props) => {
  const { shippingData, handleClick } = props;

  const generateTable = (data) => {
    return (
      <TableContainer className="shipping-info-table-container">
        <Table variant="striped" className="shipping-info-table" size="md">
          <Thead>
            <Tr>
              <Th>Shipping Date</Th>
              <Th>Order ID</Th>
              <Th>Tracking Number</Th>
              <Th>Cost</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d) => {
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

  return (
    <React.Fragment>{generateTable(shippingData)}</React.Fragment>
  );
};

export default ShippingInfoTable;
