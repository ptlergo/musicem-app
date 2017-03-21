module.exports = (express) => {
  const router = express.Router();
  const apiRoutes = require('./api/brands.routes')(express);

  // GET api base route
  router.get('/', (req, res) => {
    res.send('api base');
  });

  router.use('/api/v1/', apiRoutes);
  return router;
};
