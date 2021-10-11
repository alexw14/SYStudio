const express = require('express');
const router = express.Router();

const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const foundOrder = await Order.findOne({ orderId: newOrder.orderId });
    if (foundOrder) {
      return res.json({
        success: false,
        message: 'This order already exists in the database',
      });
    } else {
      const savedOrder = await newOrder.save();
      return res.status(200).json({
        success: true,
        order: savedOrder,
      });
    }
  } catch (err) {
    return res.json({ success: false, err });
  }
});

module.exports = router;
