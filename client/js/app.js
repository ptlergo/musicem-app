angular.
  module('myApp', ['ui.router', 'ngAnimate', 'ngMaterial', 'firebase']).
  constant('FIREBASE_URL', 'https://facebooklogin-4a1ff.firebaseio.com').
  config(($stateProvider, $urlRouterProvider) => {

      const successState = {
          controller: 'SuccessController',
          name: 'success',
          templateUrl: '../views/success.html',
          url: '/success',
      };

      const loginState = {
          controller: 'LoginController',
          name: 'login',
          templateUrl: '../views/login.html',
          url: '/login',
      };

      const contentState = {
          controller: 'FeedController',
          name: 'home',
          templateUrl: '../views/home.html',
          url: '/home',
      };

      $stateProvider.state(contentState);
      $stateProvider.state(successState);
      $stateProvider.state(loginState);
      $urlRouterProvider.otherwise('/home');

  });
