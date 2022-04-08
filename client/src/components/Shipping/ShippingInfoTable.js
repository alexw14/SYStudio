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

const generateTable = (data, handleClick) => {
  return (
    <TableContainer className="shipping-info-table-container">
      <Table variant="simple" className="shipping-info-table" size="lg">
        <Thead>
          <Tr>
            <Th>Shipping Date</Th>
            <Th>Tracking Number</Th>
            <Th>Cost</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((d) => {
            return (
              <Tr key={d.trackingNumber}>
                <Td>{d.date ? d.date.split('T')[0] : 'N/A'}</Td>
                <Td>
                  <span
                    className="tracking-number"
                    onClick={() => handleClick(d)}
                  >
                    {d.trackingNumber}
                  </span>
                </Td>
                <Td>${d.cost ? d.cost : 0}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const ShippingInfoTable = (props) => {
  const { shippingData, handleClick } = props;
  return (
    <React.Fragment>{generateTable(shippingData, handleClick)}</React.Fragment>
  );
};

export default ShippingInfoTable;
