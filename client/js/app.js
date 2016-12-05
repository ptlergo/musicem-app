angular.module('myApp', ['ui.router', 'firebase', 'ngAnimate', 'ngMaterial']).
  constant('FIREBASE_URL', 'https://facebooklogin-4a1ff.firebaseio.com').
  config(($stateProvider) => {

      const firebaseState = {
          controller: 'firebaseuiController',
          name: 'firebaseui',
          templateUrl: '../views/firebaseui.html',
          url: '/firebaseui',
      };

      const successState = {
          controller: 'SuccessController',
          name: 'success',
          templateUrl: '../views/success.html',
          url: '/success',
      };

      $stateProvider.state(firebaseState);
      $stateProvider.state(successState);

  });
