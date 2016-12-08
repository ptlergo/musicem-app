angular.module('myApp').
  factory('Auth', Auth);

Auth.$inject = ['$firebaseAuth', 'FIREBASE_URL'];

const config = {
    apiKey: 'AIzaSyAw0vo20GbssVKhraKrkdQgwV2oALGjNDk',
    authDomain: 'facebooklogin-4a1ff.firebaseapp.com',
    databaseURL: 'https://facebooklogin-4a1ff.firebaseio.com',
    messagingSenderId: '998356488921',
    storageBucket: 'facebooklogin-4a1ff.appspot.com',
};

/**
  * @ngdoc method
  * @name Auth
  * @methodOf module.Auth
  * @description
  * User authentication service
  *
  * @returns {}
*/
function Auth ($firebaseAuth, FIREBASE_URL) {

    const auth = firebase.initializeApp(config);

    return auth;

};
