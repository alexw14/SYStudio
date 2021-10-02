const formatEtsyData = (soldOrders, soldOrderItems) => {
  const soldOrdersData = [];
  const soldOrderItemsMap = {};

  const getOrderMonthAndYear = (date) => {
    const fullDateArray = date.split('/');
    return fullDateArray[0] + fullDateArray[2];
  };

  // Generate Sold Order Items Map
  for (let item of soldOrderItems) {
    let orderId = item['Order ID'];
    if (!soldOrderItemsMap[orderId]) {
      soldOrderItemsMap[orderId] = [];
    }
    soldOrderItemsMap[orderId].push(item);
  }

  // Format Sold Order Data
  for (let order of soldOrders) {
    const orderObj = {};
    orderObj.orderId = order['Order ID'];
    orderObj.saleDate = order['Sale Date'];
    orderObj.saleMonthAndYear = getOrderMonthAndYear(order['Sale Date']);
    orderObj.soldItems = soldOrderItemsMap[order['Order ID']];
    orderObj.numOfItems = order['Number of Items'];
    orderObj.orderNet = order['Order Net'];
    orderObj.orderValue = order['Order Value'];
    orderObj.shippingCharged = order['Shipping'];
    orderObj.shippingTransactionFees = parseFloat(
      (0.05 * order['Shipping']).toFixed(2)
    );
    orderObj.paymentProcessFees = order['Card Processing Fees'];
    orderObj.listingFees = parseFloat(
      (0.2 * order['Number of Items']).toFixed(2)
    );
    orderObj.discountAmount = order['Discount Amount'];
    orderObj.adjustedOrderNet = order['Adjusted Net Order Amount'];
    orderObj.adjustedPaymentProcessFees =
      order['Adjusted Card Processing Fees'];
    soldOrdersData.push(orderObj);
  }

  return soldOrdersData;
};
