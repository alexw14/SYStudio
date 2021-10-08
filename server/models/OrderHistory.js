const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderHistorySchema = new Schema({
  monthAndYear: { type: String },
  orders: { type: Array }
});

mongoose.model('OrderHistory', orderHistorySchema);
