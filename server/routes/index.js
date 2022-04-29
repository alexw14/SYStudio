const usersRouter = require('./usersRouter');
const orderRouter = require('./orderRouter');
const orderHistoryRouter = require('./orderHistoryRouter');
const inventoriesRouter = require('./inventoriesRouter');
const shippingRouter = require('./shippingRouter');

module.exports = (app) => {
  app.use('/api/users', usersRouter);
  app.use('/api/order', orderRouter);
  app.use('/api/orderhistory', orderHistoryRouter);
  app.use('/api/inventories', inventoriesRouter);
  app.use('/api/shipping', shippingRouter);
};
