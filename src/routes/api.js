const express = require('express');
const Xray = require('x-ray');
const x = Xray();
const router = express.Router();

// GET api base route
router.get('/', (req, res) => {
  res.send('api base');
});

// Test route scraped from url
router.get('/brand', (req, res) => {
  const brand = 'http://www.hotnewhiphop.com/';
  const stream = x(brand, {
    title: 'title',
    image: 'img@src',
    tags: ['li'],
  }).stream();
  stream.pipe(res);
});

module.exports = router;
