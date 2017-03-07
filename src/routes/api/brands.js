module.exports = (express) => {
  const router = express.Router();
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

  return router;
};
