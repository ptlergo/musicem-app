const config = require('../config');
const fb = require('./fireConfig');

const ref = fb.fireDatabase.ref('cat/');

module.exports = {
  test: () => {
    return {
      dog: () => {
        return 'hello dog';
      },
      cat: () => {
        return ref.set({
          msg: 'new msg cat again',
        });
      },
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
