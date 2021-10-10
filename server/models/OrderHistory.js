const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderHistorySchema = new Schema({
  monthAndYear: { type: String },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

module.exports = mongoose.model('OrderHistory', orderHistorySchema);
