const express = require('express');
const router = express.Router();

// User Register
router.get('/register', (req, res, next) => {
  res.send('register route');
  next();
});

// User Auth
router.get('/authenticate', (req, res, next) => {
  res.send('authenticate route');
  next();
});

// Profile
router.get('/profile', (req, res, next) => {
  res.send('profile route');
  next();
});

// Validate
router.get('/validate', (req, res, next) => {
  res.send('validate route');
  next();
});
module.exports = router;
