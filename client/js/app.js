angular
.module('myApp', ['ui.router', 'ngAnimate', 'ngMaterial', 'ngSanitize'])
.config(($stateProvider, $urlRouterProvider) => {
  const contentState = {
    controller: 'FeedController',
    name: 'home',
    templateUrl: '../views/home.html',
    url: '/home',
  };

  $stateProvider.state(contentState);
  $urlRouterProvider.otherwise('/home');
});
