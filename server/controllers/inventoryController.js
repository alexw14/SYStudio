const Inventory = require('../models/Inventory');

const getInventory = async (req, res) => {
  try {
    const foundInventories = await Inventory.find({});

    if (!foundInventories) {
      return res.status(404).json({
        success: false,
        message: 'There are no inventories in the database.',
      });
    }

    return res.status(200).json({
      success: true,
      inventories: foundInventories,
    });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

const addInventory = async (req, res) => {
  try {
    const newInventory = new Inventory(req.body);
    const foundInventory = await Inventory.findOne({ sku: newInventory.sku });

    if (foundInventory) {
      return res.status(200).json({
        success: false,
        message: 'This inventory already exists in the database.',
      });
    }

    const savedInventory = await newInventory.save();
    return res.status(201).json({
      success: true,
      inventory: savedInventory,
    });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

const editInventory = async (req, res) => {
  try {
    const { name, sku, costOfGoods, category } = req.body;
    const foundInventory = await Inventory.findOne({
      sku: req.params.sku,
    });

    if (!foundInventory) {
      return res.status(404).json({
        success: false,
        message: 'This inventory cannot be found in the database.',
      });
    }

    foundInventory.name = name;
    foundInventory.sku = sku;
    foundInventory.costOfGoods = costOfGoods;
    foundInventory.category = category;
    const savedInventory = await foundInventory.save();
    return res.status(200).json({
      success: true,
      inventory: savedInventory,
    });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

module.exports = {
  getInventory,
  addInventory,
  editInventory,
};
