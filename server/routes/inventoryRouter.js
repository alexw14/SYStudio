const express = require('express');
const router = express.Router();

const Inventory = require('../models/Inventory');

router.post('/', async (req, res) => {
  try {
    const newInventory = new Inventory(req.body);
    const foundInventory = await Inventory.findOne({ sku: newInventory.sku });

    if (!foundInventory) {
      const savedInventory = await newInventory.save();
      return res.status(200).json({
        success: true,
        inventory: savedInventory,
      });
    } else {
      return res.json({
        success: false,
        message: 'This inventory already exists in the database.',
      });
    }
  } catch (err) {
    return res.json({ success: false, error: err });
  }
});

router.get('/', async (req, res) => {
  try {
    const foundInventories = await Inventory.find({});
    if (foundInventories) {
      return res.status(200).json({
        success: true,
        inventories: foundInventories,
      });
    } else {
      return res.json({
        success: false,
        message: 'There are no inventories in the database.',
      });
    }
  } catch (err) {
    return res.json({ success: false, error: err });
  }
});

module.exports = router;
