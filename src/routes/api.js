const express = require('express');

const router = express.Router();

// GET api base route
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
