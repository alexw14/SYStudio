import React from 'react';

const generateTable = (data) => {
  return (
    <table className="shipping-info-table">
      <thead>
        <tr>
          <th>Shipping Date</th>
          <th>Tracking Number</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => {
          return (
            <tr key={d.trackingNumber}>
              <td>{d.date ? d.date.split('T')[0] : 'N/A'}</td>
              <td>{d.trackingNumber}</td>
              <td>${d.cost ? d.cost : 0}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const ShippingInfoTable = (props) => {
  const { shippingData } = props;
  return <React.Fragment>{generateTable(shippingData)}</React.Fragment>;
};

export default ShippingInfoTable;
