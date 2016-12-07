angular.
  module('myApp', ['ui.router', 'ngAnimate', 'ngMaterial']).
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

      $stateProvider.state(contentState);
      $stateProvider.state(successState);
      $stateProvider.state(loginState);
      $stateProvider.state(regState);

  });
