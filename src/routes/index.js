module.exports = (express) => {
  const router = express.Router();

  // GET api base route
  router.get('/', (req, res) => {
    res.send('api base');
  });

  router.use('/api/', require('./api/brands.routes')(express));
  return router;
};
