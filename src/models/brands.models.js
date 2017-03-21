const config = require('../config');
const fb = require('./fireConfig');

const ref = fb.fireDatabase.ref('cat/');

module.exports = {
  test: () => {
    return {
      dog: 'test dog',
      cat: 'test cat',
    };
  },

  create: () => {
  },

  readAll: () => {
  },

  // TODO: have snapshot be accesible at route
  read: () => {

  },

  update: (updateVal) => {
    const newMsg = {
      msg: updateVal,
    };

    const newMsgKey = ref.child('msg').child('newMsgKey').push().key;

    const updates = {};
    updates['' + newMsgKey] = newMsg;

    return ref.update(updates);
  },

};
