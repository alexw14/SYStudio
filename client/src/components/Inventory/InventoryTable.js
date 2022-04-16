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

import './Inventory.css';

const InventoryTable = (props) => {
  const { inventories, filter, handleTableRowClick } = props;

  const filterFn = (item) => {
    const filterName = filter.name ? filter.name.toLowerCase() : '';
    const filterSku = filter.sku ? filter.sku.toLowerCase() : '';
    const filterCategory = filter.category ? filter.category : '';
    const { name, sku, category } = item;
    if (
      name.toLowerCase().includes(filterName) &&
      sku.toLowerCase().includes(filterSku) &&
      (category === filterCategory || filterCategory === '')
    ) {
      return true;
    }
    return false;
  };

  const generateTable = (data) => {
    const tableData = data.filter(filterFn);
    return (
      <TableContainer className="inventory-table-container">
        <Table variant="striped" className="inventory-table" size="md">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>SKU</Th>
              <Th>Cost of Goods</Th>
              <Th>Category</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((d) => {
              return (
                <Tr key={d.sku} onClick={() => handleTableRowClick(d)}>
                  <Td>{d.name}</Td>
                  <Td>{d.sku}</Td>
                  <Td>${d.costOfGoods}</Td>
                  <Td>{d.category}</Td>
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
