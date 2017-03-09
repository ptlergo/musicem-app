const firebase = require('firebase');
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
};

exports.fireInit = firebase.initializeApp(firebaseConfig);
exports.fireData = firebase.database();
