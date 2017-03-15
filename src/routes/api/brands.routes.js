module.exports = (express) => {
  const config = require('../../config');
  const brand = require('../../models/brands.models');
  const router = express.Router();

  // Read All brands
  router.get('/brand', (req, res) => {
    brand.update('msg updated from route 2');
    res.json({ brands: brand.ref });
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
