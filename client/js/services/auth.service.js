angular.module('myApp').
  factory('Auth', Auth);

Auth.$inject = ['$firebaseAuth', 'FIREBASE_URL'];

const config = {
    apiKey: 'AIzaSyClyscxZ8vuZwgRQ9TGwS-mIHiekFwWoyU',
    authDomain: 'musicem-cd810.firebaseapp.com',
    databaseURL: 'https://musicem-cd810.firebaseio.com',
    messagingSenderId: '1027119518571',
    storageBucket: 'musicem-cd810.appspot.com',
};

/**
  * @ngdoc method
  * @name Auth
  * @methodOf module.Auth
  * @description
  * User authentication service
  *
  * @returns { auth }
*/
function Auth ($firebaseAuth, FIREBASE_URL) {

    const auth = firebase.initializeApp(config);

    return auth;

};
