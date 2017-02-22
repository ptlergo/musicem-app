/* eslint no-process-env: 0 */
/* eslint no-console: 0 */
require('dotenv').config();

// Initialize Firebase
const fireConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
};

exports.fireConfig = fireConfig;
