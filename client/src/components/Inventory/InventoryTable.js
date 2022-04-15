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

const InventoryTable = (props) => {
  const { inventories } = props;

  const generateTable = (data) => {
    return (
      <TableContainer className="inventory-table-container">
        <Table variant="striped" className="inventory-table" size="md">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>SKU</Th>
              <Th>Cost of Goods</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d) => {
              return (
                <Tr key={d.sku}>
                  <Td>{d.name}</Td>
                  <Td>{d.sku}</Td>
                  <Td>${d.costOfGoods}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    );
  };
  return <React.Fragment>{generateTable(inventories)}</React.Fragment>;
};

export default InventoryTable;
