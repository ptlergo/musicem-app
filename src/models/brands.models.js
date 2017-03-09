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
    console.log(snapshot.val());
  }, (err) => {
    console.log('ERROR! FIREBASE READ FAILED: ', err.code);
  }),

  update: () => {
    ref.snapshot.val();
  },
};
