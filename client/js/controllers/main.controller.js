/**
 * @ngdoc method
 * @name MainController
 * @methodOf module.MainController
 * @description
 * Control to connect server side routes
 *
 * @returns {}
 */
function MainController($http) {
  const vm = this;
  vm.message = 'main controller welcome!';
}

MainController.$inject = ['$http'];

angular.module('myApp').controller('MainController', MainController);
