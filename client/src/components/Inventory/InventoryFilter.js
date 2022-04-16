import React, { useState } from 'react';
import { Select, Button, Input } from '@chakra-ui/react';
import { MdCheckCircle, MdClear } from 'react-icons/md';

import { categoryOptions } from '../../utils/categoryOptions';

const InventoryFilter = (props) => {
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [category, setCategory] = useState('');

  const { handleFilter } = props;

  const clearFilter = () => {
    setName('');
    setSku('');
    setCategory('');
    handleFilter({ name: '', sku: '', category: '' });
  };

  const generateFilterInputs = () => {
    return (
      <div className="inventory-filter">
        <div className="filter-input name">
          <label>Name</label>
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="filter-input sku">
          <label>SKU</label>
          <Input
            name="sku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
        <div className="filter-input category">
          <label>Category</label>
          <Select
            placeholder="Select category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categoryOptions.map((cat, i) => {
              return (
                <option key={i} value={cat}>
                  {cat}
                </option>
              );
            })}
          </Select>
        </div>
        <div className="filter-input btn-container">
          <Button
            type="button"
            size="md"
            colorScheme="teal"
            leftIcon={<MdCheckCircle />}
            onClick={() => handleFilter({ name, sku, category })}
          >
            Apply
          </Button>
          <Button
            type="button"
            size="md"
            leftIcon={<MdClear />}
            onClick={() => clearFilter()}
          >
            Clear
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="inventory-filter-container">{generateFilterInputs()}</div>
  );
};

export default InventoryFilter;
