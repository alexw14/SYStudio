const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

app.use(express.json()) // Use to parse JSON bodies

const router = require('./routes');

mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (err) throw err;
  console.log('Connected to MongoDB!');
});

router(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
