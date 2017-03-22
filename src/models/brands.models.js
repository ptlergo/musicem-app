const config = require('../config');
const fb = require('./fireConfig');

const ref = fb.fireDatabase.ref('cat/');

module.exports = {
  test: () => {
    return {
      dog: () => {
        const msg = 'hello dog';
        return msg;
      },
      cat: () => {
        return ref.set({
          msg: 'new msg cat again',
        });
      },
      reader: () => {
        ref.on('value', gotData, errData);

        function gotData(data) {
          console.log(data.val());
        }

        function errData(err) {
          console.log('error grabing data');
          console.log(err);
        }
      },
    };
  },

  create: (brandname) => {
    return ref.set({
      msg: brandname,
    });
  },

  readAll: () => {
  },

  // TODO: have snapshot be accesible at route
  read: () => {
    ref.on('value', (snapshot) => {
      return snapshot.val();
    });
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
