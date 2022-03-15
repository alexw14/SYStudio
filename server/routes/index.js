const orderRouter = require('./orderRouter')
const orderHistoryRouter = require('./orderHistoryRouter');
const inventoryRouter = require('./inventoryRouter');

module.exports = (app) => {
  app.use('/api/order', orderRouter);
  app.use('/api/orderhistory', orderHistoryRouter);
  app.use('/api/inventory', inventoryRouter);
};
