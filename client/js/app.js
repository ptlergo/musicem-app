angular
.module('myApp', ['ui.router', 'ngAnimate', 'ngMaterial', 'ngSanitize'])
.config(($stateProvider, $locationProvider, $urlRouterProvider) => {
  const contentState = {
    controller: 'FeedController',
    name: 'home',
    templateUrl: '../views/home.html',
    url: '/home',
  };

  const welcomeState = {
    controller: 'MainController',
    name: 'welcome',
    templateUrl: '../views/welcome.html',
    url: '/welcome',
  };

  $stateProvider.state(contentState);
  $stateProvider.state(welcomeState);
  $urlRouterProvider.otherwise('/welcome');
  $locationProvider.html5Mode(true);
});
