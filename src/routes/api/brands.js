module.exports = (express) => {
  const firebaseInit = require('../../config/firebase');
  const firebase = require('firebase');
  const bodyParser = require('body-parser');
  const Xray = require('x-ray');
  const router = express.Router();
firebaseInit.init;
  const x = Xray();
  router.use(bodyParser.json());

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

  router.post('/brand', (req, res) => {
    firebase.database().ref().set({ msg: 'mmmmm' });
    console.log(req.body);
    res.status(200);
  });

  router.get('/add', (req, res) => {
    res.send('messages');
  });

  return router;
};
