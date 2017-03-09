const fb = require('./fireConfig');
module.exports = {
  test: {
    msg: 'test method',
  },
  create: (payload, err, success) => {
    console.log(fb.fireDatabase);
  },
};
