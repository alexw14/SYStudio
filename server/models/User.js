const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  email: String,
  role: Number,
});

mongoose.model('users', userSchema);
