import React from 'react';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { MdSave, MdClear } from 'react-icons/md';

const ShippingInfoInputs = (props) => {
  const {
    date,
    trackingNumber,
    cost,
    errorMessage,
    handleChange,
    handleSubmit,
    resetShippingInfoInputs,
  } = props;

  const generateShippingInputs = () => {
    return (
      <form className="shipping-inputs-form" onSubmit={(e) => handleSubmit(e)}>
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
          <label>Tracking Number</label>
          <Input
            name="trackingNumber"
            value={trackingNumber}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Cost</label>
          <Input name="cost" value={cost} onChange={(e) => handleChange(e)} />
        </div>
        <div className="buttons-container">
          <Button
            type="submit"
            size="sm"
            colorScheme="blue"
            leftIcon={<MdSave />}
          >
            Save
          </Button>
          <Button
            type="button"
            size="sm"
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
      {generateShippingInputs()}
      <div className="error-text">{errorMessage}</div>
    </div>
  );
};

export default ShippingInfoInputs;
