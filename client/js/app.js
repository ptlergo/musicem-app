angular.module('myApp', ['ui.router', 'ngAnimate', 'ngMaterial']).
  config(($stateProvider) => {

      const successState = {
          controller: 'successController',
          name: 'success',
          templateUrl: '../views/success.html',
          url: '/success',
      };

      $stateProvider.state(successState);

  });
