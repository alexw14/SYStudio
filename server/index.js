const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();
require('./models/Order');
require('./models/OrderHistory');

mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (err) throw err;
  console.log('Connected to MongoDB!');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT);
