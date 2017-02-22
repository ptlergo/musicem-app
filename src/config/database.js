const admin = require('firebase-admin');
const serviceAccount = require('./firebase-config');
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseURL,
});
