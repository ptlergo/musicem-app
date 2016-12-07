angular.
  module('myApp', ['ui.router', 'ngAnimate', 'ngMaterial', 'firebase']).
  constant('FIREBASE_URL', 'https://facebooklogin-4a1ff.firebaseio.com').
  config(($stateProvider) => {

      const successState = {
          controller: 'SuccessCtrl',
          name: 'success',
          templateUrl: '../views/success.html',
          url: '/success',
      };

      const loginState = {
          controller: 'LoginCtrl',
          name: 'login',
          templateUrl: '../views/login.html',
          url: '/login',
      };

      const contentState = {
          controller: 'MainCtrl',
          name: 'home',
          templateUrl: '../views/home.html',
          url: '/home',
      };

      const regState = {
          controller: 'RegCtrl',
          name: 'register',
          templateUrl: '../views/register.html',
          url: '/register',
      };

      const fireuiState = {
          controller: 'firebaseuiCtrl',
          name: 'fireui',
          templateUrl: '../views/firebaseui.html',
          url: '/fireui',
      };

      const config = {
          apiKey: 'AIzaSyAw0vo20GbssVKhraKrkdQgwV2oALGjNDk',
          authDomain: 'facebooklogin-4a1ff.firebaseapp.com',
          databaseURL: 'https://facebooklogin-4a1ff.firebaseio.com',
          messagingSenderId: '998356488921',
          storageBucket: 'facebooklogin-4a1ff.appspot.com',
      };

      firebase.initializeApp(config);
      $stateProvider.state(contentState);
      $stateProvider.state(successState);
      $stateProvider.state(loginState);
      $stateProvider.state(regState);
      $stateProvider.state(fireuiState);

  });
