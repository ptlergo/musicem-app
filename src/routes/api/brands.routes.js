module.exports = (express) => {
  const config = require('../../config');
  const brand = require('../../models/brands.models');
  const router = express.Router();

  // Read All brands
  router.get('/brands', (req, res) => {
    res.json({ brands: brand.read });
  });

  // Read One brand
  router.get('/brands/:id', (req, res) => {
    res.json({ brands: 'brands route' });
  });

  // Create A brands
  router.post('/brands', (req, res) => {
    res.json({ brands: 'brands route' });
  });

  // Update A brand
  router.put('/brands/:id', (req, res) => {
    res.json({ brands: 'brands route' });
  });

  // Read All brands
  router.delete('/brands/:id', (req, res) => {
    res.json({ brands: 'brands route' });
  });

  return router;
};
