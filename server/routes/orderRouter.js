const express = require('express');
const router = express.Router();

const Order = require('../models/Order');
const OrderHistory = require('../models/OrderHistory');

router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const foundOrder = await Order.findOne({ orderId: newOrder.orderId });
    const foundOrderHistory = await OrderHistory.findOne({
      monthAndYear: newOrder.saleMonthAndYear,
    });

    if (!foundOrder) {
      const savedOrder = await newOrder.save();
      let orderHistory = null;

      if (foundOrderHistory) {
        foundOrderHistory.orders.push(savedOrder._id);
        orderHistory = await foundOrderHistory.save();
      } else {
        const newOrderHistory = new OrderHistory({
          monthAndYear: newOrder.saleMonthAndYear,
          orders: [savedOrder._id],
        });
        orderHistory = await newOrderHistory.save();
      }

      return res.status(200).json({
        success: true,
        order: savedOrder,
        orderHistory: orderHistory,
      });
    } else {
      return res.json({
        success: false,
        message: 'This order already exists in the database',
      });
    }
  } catch (err) {
    return res.json({ success: false, error: err });
  }
});

module.exports = router;
