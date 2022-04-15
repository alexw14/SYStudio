const mongoose = require('mongoose');

const { Schema } = mongoose;

const inventorySchema = new Schema({
  name: { type: String },
  sku: { type: String },
  costOfGoods: { type: Number },
  category: {
    type: String,
    enum: [
      'PET Tape Roll',
      'PET Tape Sample',
      'Washi Tape Roll',
      'Washi Tape Sample',
      'Sticker',
      'Stamp',
      'Stationery',
      'Handmade',
      'Postcard',
      'Greeting Card',
      'Paper',
      'Tracing Tape Roll',
      'Tracing Tape Sample',
    ],
  },
  sold: { type: Number },
});

module.exports = mongoose.model('Inventory', inventorySchema);
