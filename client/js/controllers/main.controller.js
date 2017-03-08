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
  vm.$http = $http;
  vm.postM = () => {
    vm.$http.post('http://localhost:8080/api/add', { msg: 'hello!' });
  };
}

MainController.$inject = ['$http'];

angular.module('myApp').controller('MainController', MainController);
