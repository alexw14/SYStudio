const express = require('express');
const router = express.Router();

const Shipping = require('../models/Shipping');

router.post('/', async (req, res) => {
  try {
    const newShippingData = new Shipping(req.body);
    const foundShippingData = await Shipping.findOne({
      trackingNumber: newShippingData.trackingNumber,
    });
    if (!foundShippingData) {
      const savedShippingData = await newShippingData.save();
      return res.status(200).json({
        success: true,
        shippingData: savedShippingData,
      });
    } else {
      return res.json({
        success: false,
        message: 'This shipping info already exists in the database.',
      });
    }
  } catch (err) {
    return res.json({ success: false, error: err });
  }
});

router.get('/', async (req, res) => {
  try {
    const foundShippingData = await Shipping.find({});
    if (foundShippingData) {
      return res.status(200).json({
        success: true,
        shippingData: foundShippingData,
      });
    } else {
      return res.json({
        success: false,
        message: 'There are no shipping data in the database.',
      });
    }
  } catch (err) {
    return res.json({ success: false, error: err });
  }
});

module.exports = router;
