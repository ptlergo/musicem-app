angular
.module('myApp', ['ui.router', 'ngAnimate', 'ngMaterial', 'ngSanitize'])
.config(($stateProvider, $locationProvider, $urlRouterProvider, $mdThemingProvider) => {
  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('cyan');

  const contentState = {
    controller: 'FeedController',
    name: 'home',
    templateUrl: '/views/home.html',
    url: '/home',
  };

  const welcomeState = {
    controller: 'WelcomeController',
    name: 'welcome',
    templateUrl: '/views/welcome.html',
    url: '/welcome',
  };

  $stateProvider.state(contentState);
  $stateProvider.state(welcomeState);
  $urlRouterProvider.otherwise('/welcome');
  $locationProvider.html5Mode(true);
});
