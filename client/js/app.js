angular.
  module('myApp', ['ui.router', 'ngAnimate', 'ngMaterial']).
  config(($stateProvider) => {

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
          controller: 'MainController',
          name: 'home',
          templateUrl: '../views/home.html',
          url: '/home',
      };

      $stateProvider.state(contentState);
      $stateProvider.state(successState);
      $stateProvider.state(loginState);

  });
