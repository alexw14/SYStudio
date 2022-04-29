const Shipping = require('../models/Shipping');

const getShipping = async (req, res) => {
  try {
    const foundShippingData = await Shipping.find({}).sort({ date: 'desc' });

    if (!foundShippingData) {
      return res.status(404).json({
        success: false,
        message: 'There are no shipping data in the database.',
      });
    }

    return res.status(200).json({
      success: true,
      shippingData: foundShippingData,
    });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

const addShipping = async (req, res) => {
  try {
    const newShippingData = new Shipping(req.body);
    const foundShippingData = await Shipping.findOne({
      orderId: newShippingData.orderId,
    });

    if (foundShippingData) {
      return res.status(200).json({
        success: false,
        message: 'This shipping info already exists in the database.',
      });
    }

    const savedShippingData = await newShippingData.save();
    return res.status(201).json({
      success: true,
      shippingData: savedShippingData,
    });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

const editShipping = async (req, res) => {
  try {
    const { date, cost } = req.body;
    const foundShippingData = await Shipping.findOne({
      orderId: req.params.orderId,
    });

    if (!foundShippingData) {
      return res.status(404).json({
        success: false,
        message: 'This shipping info cannot be found in the database.',
      });
    }

    foundShippingData.date = date;
    foundShippingData.cost = cost;
    const savedShippingData = await foundShippingData.save();
    return res.status(200).json({
      success: true,
      shippingData: savedShippingData,
    });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

module.exports = {
  getShipping,
  addShipping,
  editShipping,
};
