module.exports = (express) => {
  const config = require('../../config');
  const brand = require('../../models/brands.models');
  const router = express.Router();

  // Read All brands
  router.get('/brands/test', (req, res) => {
    config.debug('brand route read', brand.test().reader());
    res.json({ brands: brand.test().dog() });
  });

  // Read One brand
  router.get('/brands/:id', (req, res) => {
    res.json({ brands: '' });
  });

  // Create A brands
  router.post('/brands', (req, res) => {
    res.json({ brands: '' });
  });

  // Create A brands
  router.post('/brands/test', (req, res) => {
    const val = req.body + 'dd';
    brand.create(val);
    config.debug('brand route create', val);
    res.json({ brands: req.body });
  });

  // Update A brand
  router.put('/brands/:id', (req, res) => {
    res.json({ brands: '' });
  });

  // Read All brands
  router.delete('/brands/:id', (req, res) => {
    res.json({ brands: 'brands route' });
  });

  return router;
};
