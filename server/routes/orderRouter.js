const express = require('express');
const router = express.Router();

const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json({
      success: true,
      order: savedOrder,
    });
  } catch (err) {
    res.json({ success: false, err });
  }
});

module.exports = router;
