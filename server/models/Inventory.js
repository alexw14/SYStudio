const mongoose = require('mongoose');

const { Schema } = mongoose;

const inventorySchema = new Schema({
  name: { type: String },
  sku: {type: String},
  costOfGoods: { type: Number },
  sold: { type: Number}
});

module.exports = mongoose.model('Inventory', inventorySchema);
