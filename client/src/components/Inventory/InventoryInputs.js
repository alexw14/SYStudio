import React from 'react';
import { Input, InputLeftElement, InputGroup, Select, Button } from '@chakra-ui/react';
import { MdSave, MdClear } from 'react-icons/md';

const InventoryInputs = (props) => {
  const { name, sku, category, costOfGoods, handleChange } = props;

  const categoryDropDownSelections = {
    petTapeRoll: 'PET Tape Roll',
    petTapeSample: 'PET Tape Sample',
    washiTapeRoll: 'Washi Tape Roll',
    washiTapeSample: 'Washi Tape Sample',
    sticker: 'Sticker',
    stamp: 'Stamp',
    stationery: 'Stationery',
    handmade: 'Handmade',
    postcard: 'Postcard',
    greetingCard: 'Greeting Card',
    paper: 'Paper',
  };

  const generateInventoryInputs = () => {
    return (
      <form className="inventory-inputs-form">
        <div className="input-wrapper input-row-1">
          <div className="input-container name">
            <label>Name</label>
            <Input name="name" value={name} onChange={(e) => handleChange(e)} />
          </div>
        </div>
        <div className="input-wrapper input-row-2">
          <div className="input-container sku">
            <label>SKU</label>
            <Input name="sku" value={sku} onChange={(e) => handleChange(e)} />
          </div>
          <div className="input-container cost">
            <label>Cost of Goods</label>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray"
                children="$"
              />
              <Input
                name="costOfGoods"
                value={costOfGoods}
                onChange={(e) => handleChange(e)}
              />
            </InputGroup>
          </div>
          <div className="input-container category">
            <label>Category</label>
            <Select
              placeholder="Select category"
              name="category"
              value={category}
              onChange={(e) => handleChange(e)}
            >
              {Object.keys(categoryDropDownSelections).map((key) => {
                return (
                  <option value={key}>{categoryDropDownSelections[key]}</option>
                );
              })}
            </Select>
          </div>
          <div className="btn-container">
            <Button
              type="submit"
              size="md"
              colorScheme="teal"
              leftIcon={<MdSave />}
            >
              Save
            </Button>
            <Button type="button" size="md" leftIcon={<MdClear />}>
              Clear
            </Button>
          </div>
        </div>
      </form>
    );
  };

  return <div className="inventory-inputs">{generateInventoryInputs()}</div>;
};

export default InventoryInputs;
