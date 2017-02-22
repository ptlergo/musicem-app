const admin = require('firebase-admin');
const serviceAccount = require('./musicem-cd810-firebase-adminsdk-w4xy7-ea304edc7c.json');
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseURL,
});

const db = admin.database();
const ref = db.ref('database/data');
ref.once('value', (snapshot) => {
  console.log(snapshot.val());
});


const usersRef = ref.child('users');
usersRef.set({
  alanisawesome: {
    date_of_birth: 'June 23, 1912',
    full_name: 'Alan Turing',
  },
  gracehop: {
    date_of_birth: 'December 9, 1906',
    full_name: 'Grace Hopper',
  },
});
