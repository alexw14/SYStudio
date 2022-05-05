import React from 'react';
import {
  Input,
  InputLeftElement,
  InputGroup,
  Button,
  Select,
} from '@chakra-ui/react';
import { MdSave, MdClear } from 'react-icons/md';

const ShippingInfoInputs = (props) => {
  const {
    date,
    orderId,
    trackingNumber,
    cost,
    errorMessage,
    isAddOrEdit,
    selectedMonthAndYear,
    handleChange,
    handleSubmit,
    resetShippingInfoInputs,
    handleClickAddEditBtn,
  } = props;

  const generateSelectedMonthAndYearDropDown = () => {
    const selectedMonthAndYearOptions = [
      'May 2022,2022-05',
      'April 2022,2022-04',
    ];
    return (
      <div className="select-month-dropdown">
        <Select
          placeholder="Select month and year"
          name="selectedMonthAndYear"
          value={selectedMonthAndYear}
          onChange={(e) => handleChange(e)}
        >
          {selectedMonthAndYearOptions.map((item) => {
            const opt = item.split(',');
            return (
              <option key={opt[1]} value={opt[1]}>
                {opt[0]}
              </option>
            );
          })}
        </Select>
      </div>
    );
  };

  const generateAddEditButtons = () => {
    return (
      <div className="add-edit-btn-container">
        <Button
          type="button"
          size="md"
          colorScheme={isAddOrEdit === 'add' ? 'teal' : 'gray'}
          onClick={() => handleClickAddEditBtn('add')}
        >
          Add
        </Button>
        <Button
          type="button"
          size="md"
          onClick={() => handleClickAddEditBtn('edit')}
          colorScheme={isAddOrEdit === 'edit' ? 'teal' : 'gray'}
        >
          Edit
        </Button>
      </div>
    );
  };

  const generateShippingInputs = () => {
    return (
      <form className="shipping-inputs-form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Order ID</label>
          <Input
            name="orderId"
            value={orderId}
            onChange={(e) => handleChange(e)}
            isReadOnly={isAddOrEdit === 'edit'}
          />
        </div>
        <div>
          <label>Tracking Number</label>
          <Input
            name="trackingNumber"
            value={trackingNumber}
            onChange={(e) => handleChange(e)}
            isReadOnly={isAddOrEdit === 'edit'}
          />
        </div>
        <div>
          <label>Shipping Date</label>
          <Input
            type="date"
            name="date"
            value={date}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Cost</label>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray" children="$" />
            <Input name="cost" value={cost} onChange={(e) => handleChange(e)} />
          </InputGroup>
        </div>
        <div className="save-btn-container">
          <Button
            type="submit"
            size="md"
            colorScheme="teal"
            leftIcon={<MdSave />}
            isDisabled={trackingNumber === '' || orderId === ''}
          >
            Save
          </Button>
          <Button
            type="button"
            size="md"
            leftIcon={<MdClear />}
            onClick={() => resetShippingInfoInputs()}
          >
            Clear
          </Button>
        </div>
      </form>
    );
  };

  return (
    <div className="shipping-info-inputs">
      {generateSelectedMonthAndYearDropDown()}
      {generateAddEditButtons()}
      {generateShippingInputs()}
      <div className="error-text">{errorMessage}</div>
    </div>
  );
};

export default ShippingInfoInputs;
