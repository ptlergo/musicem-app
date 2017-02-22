const express = require('express');
const router = express.Router();

// User Register
router.get('/register', (req, res, next) => {
  res.send('register');
  next();
});

module.exports = router;
