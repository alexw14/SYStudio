const orderRouter = require('./orderRouter')

module.exports = (app) => {
  app.use('/api/order', orderRouter);
};
