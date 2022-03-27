const orderRouter = require('./orderRouter');
const orderHistoryRouter = require('./orderHistoryRouter');
const inventoryRouter = require('./inventoryRouter');
const shippingRouter = require('./shippingRouter');

module.exports = (app) => {
  app.use('/api/order', orderRouter);
  app.use('/api/orderhistory', orderHistoryRouter);
  app.use('/api/inventory', inventoryRouter);
  app.use('/api/shipping', shippingRouter);
};
