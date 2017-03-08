
const firebase = require("firebase");
const firebaseui = require('firebaseui');
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
};

firebase.initializeApp(firebaseConfig);

const ref = firebase.database().ref('');
