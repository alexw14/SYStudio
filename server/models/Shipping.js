const mongoose = require('mongoose');

const { Schema } = mongoose;

const shippingSchema = new Schema({
  date: { type: Date },
  trackingNumber: { type: String },
  cost: { type: Number },
  orderId: { type: String},
});

module.exports = mongoose.model('Shipping', shippingSchema);
