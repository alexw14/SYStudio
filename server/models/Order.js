const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  orderId: { type: Number },
  saleDate: { type: String },
  saleMonthAndYear: {type: String},
  soldItems: { type: Array },
  numOfItems: { type: Number },
  orderNet: { type: Number },
  orderValue: { type: Number },
  shippingCharged: { type: Number },
  shippingTransactionFees: { type: Number },
  paymentProcessFees: { type: Number },
  listingFees: { type: Number },
  discountAmount: { type: Number },
  adjustedOrderNet: { type: Number },
  adjustedPaymentProcessFees: { type: Number },
});

module.exports = mongoose.model('Order', orderSchema);
