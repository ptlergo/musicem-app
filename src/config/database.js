const admin = require('firebase-admin');
const serviceAccount = require('./musicem-cd810-firebase-adminsdk-w4xy7-ea304edc7c.json');
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseURL,
});

const db = admin.database();
const ref = db.ref('restricted_access/secret_document');
ref.once('value', (snapshot) => {
  console.log(snapshot.val());
});
