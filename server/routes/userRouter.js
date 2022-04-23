const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const router = express.Router();
const saltRounds = 10;

// Register user
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please include name, email, and password',
      });
    }

    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    if (savedUser) {
      return res.status(200).json({
        success: true,
        user: {
          name: savedUser.name,
          email: savedUser.email,
        },
      });
    }
  } catch (err) {
    return res.json({ success: false, error: err, message: 'catch error' });
  }
});

// // Login User
// router.post('/login', async (req, res) => {});

// // Get User
// router.get('/', async (req, res) => {});

module.exports = router;
