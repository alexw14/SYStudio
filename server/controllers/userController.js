const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const SECRET = process.env.JWT_SECRET;
const saltRounds = 10;

// Register User
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password cannot be blank',
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
      const token = generateToken(savedUser);
      return res.status(200).json({
        success: true,
        token,
      });
    }
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

// Login User
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({
        success: false,
        message: 'This user does not exist in the database',
      });
    }

    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.status(400).json({
        success: 'false',
        message: 'Invalid credentials',
      });
    }

    const token = generateToken(foundUser);
    return res.status(200).json({
      success: true,
      user: {
        token,
      },
    });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

// Generate JWT
const generateToken = (user) => {
  return jwt.sign({ user }, SECRET, {
    expiresIn: '1d',
  });
};

module.exports = {
  register,
  login,
};
