const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (err) throw err;
  console.log('Connected to MongoDB!');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT);
