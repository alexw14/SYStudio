const jwt = require('jsonwebtoken');
const User = require('../models/User');
const SECRET = process.env.JWT_SECRET;

const checkAuth = async (req, res, next) => {
  // const { authorization } = req.headers;
  // if (!authorization) {
  //   res.status(401).json({
  //     message: 'Not authorized',
  //   });
  // }

  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({
        message: 'Not authorized',
      });
    }
  }
  if (!token) {
    return res.status(401).json({
      message: 'Not authorized, no token',
    });
  }
};

module.exports = {
  checkAuth,
};
