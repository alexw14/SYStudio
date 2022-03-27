const mongoose = require('mongoose');

const { Schema } = mongoose;

const shippingSchema = new Schema({
  date: { type: Date },
  trackingNumber: { type: String },
  cost: { type: Number },
});

module.exports = mongoose.model('Shipping', shippingSchema);
