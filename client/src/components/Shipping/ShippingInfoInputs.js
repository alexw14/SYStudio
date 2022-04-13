import React from 'react';
import { Input, Button } from '@chakra-ui/react';
import { MdSave, MdClear } from 'react-icons/md';

const ShippingInfoInputs = (props) => {
  const {
    date,
    orderId,
    trackingNumber,
    cost,
    errorMessage,
    isAddOrEdit,
    handleChange,
    handleSubmit,
    resetShippingInfoInputs,
    handleClickAddEditBtn,
  } = props;

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
          <Input name="cost" value={cost} onChange={(e) => handleChange(e)} />
        </div>
        <div className="save-btn-container">
          <Button
            type="submit"
            size="md"
            colorScheme="blue"
            leftIcon={<MdSave />}
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
      {generateAddEditButtons()}
      {generateShippingInputs()}
      <div className="error-text">{errorMessage}</div>
    </div>
  );
};

export default ShippingInfoInputs;
