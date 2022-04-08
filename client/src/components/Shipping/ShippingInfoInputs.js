import React from 'react';

const ShippingInfoInputs = (props) => {
  const {
    date,
    trackingNumber,
    cost,
    handleChange,
    handleSubmit,
    resetShippingInfoInputs,
  } = props;

  const generateShippingInputs = () => {
    return (
      <form className="shipping-inputs-form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Shipping Date</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <label>Tracking Number</label>
          <input
            type="text"
            name="trackingNumber"
            value={trackingNumber}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <label>Cost</label>
          <input
            type="text"
            name="cost"
            value={cost}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="buttons-container">
          <button type="submit">Add</button>
          <button type="button" onClick={() => resetShippingInfoInputs()}>
            Clear
          </button>
        </div>
      </form>
    );
  };

  return <React.Fragment>{generateShippingInputs()}</React.Fragment>;
};

export default ShippingInfoInputs;
