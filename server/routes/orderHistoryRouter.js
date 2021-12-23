const express = require('express');
const router = express.Router();

const Order = require('../models/Order');
const OrderHistory = require('../models/OrderHistory');

router.get('/', async (req, res) => {
  try {
    const monthAndYear = req.query.monthAndYear;
    const foundOrderHistory = await OrderHistory.findOne({
      monthAndYear: monthAndYear,
    }).populate('orders');

    if (foundOrderHistory) {
      return res.status(200).json({
        success: true,
        orderHistory: foundOrderHistory,
      });
    } else {
      return res.json({
        success: false,
        message: 'The order history for your query does not exist.',
      });
    }
  } catch (err) {
    return res.json({ success: false, error: err });
  }
});

module.exports = router;
