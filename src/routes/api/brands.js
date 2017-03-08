module.exports = (express) => {
  const router = express.Router();
  const bodyParser = require('body-parser');
  router.use(bodyParser.json());


  const Xray = require('x-ray');

  const x = Xray();

  // Read All brands
  router.get('/brand', (req, res) => {
    const brand = 'http://www.hotnewhiphop.com/';
    const stream = x(brand, {
      title: 'title',
      image: 'img@src',
      tags: ['li'],
    }).stream();
    stream.pipe(res);
  });

  router.post('/add', (req, res) => {
    console.log(req.body);
    res.status(200);
  });

  return router;
};
