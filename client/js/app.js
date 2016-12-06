angular.module('myApp', ['ui.router', 'ngAnimate', 'ngMaterial']).
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

      $stateProvider.state(successState);
      $stateProvider.state(loginState);

  });
