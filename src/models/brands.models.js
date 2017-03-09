const config = require('../config');
const fb = require('./fireConfig');

const ref = fb.fireDatabase.ref('cat/');

module.exports = {
  test: {
    msg: 'test method',
  },

  create: () => {
  },

  readAll: () => {
    ref.snapshot.val();
  },

  read: ref.on('value', (snapshot) => {
    config.debug(snapshot.val(), 'model brand read method');
  }, (err) => {
    debug('ERROR! FIREBASE READ FAILED: ', err.code);
  }),

  update: () => {
    ref.snapshot.val();
  },
};
