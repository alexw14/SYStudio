const Inventory = require('../models/Inventory');

const getInventory = async (req, res) => {
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
};

const addInventory = async (req, res) => {
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
};

const editInventory = async (req, res) => {
  try {
    const { name, sku, costOfGoods, category } = req.body;
    const foundInventory = await Inventory.findOne({
      sku: req.params.sku,
    });
    if (foundInventory) {
      foundInventory.name = name;
      foundInventory.sku = sku;
      foundInventory.costOfGoods = costOfGoods;
      foundInventory.category = category;
      const savedInventory = await foundInventory.save();
      return res.status(200).json({
        success: true,
        inventory: savedInventory,
      });
    } else {
      return res.json({
        success: false,
        message: 'This inventory cannot be found in the database.',
      });
    }
  } catch (err) {
    return res.json({ success: false, error: err });
  }
};

module.exports = {
  getInventory,
  addInventory,
  editInventory,
};
