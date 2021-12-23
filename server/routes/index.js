const orderRouter = require('./orderRouter')
const orderHistoryRouter = require('./orderHistoryRouter');

module.exports = (app) => {
  app.use('/api/order', orderRouter);
  app.use('/api/orderhistory', orderHistoryRouter);
};
