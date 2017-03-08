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
  vm.postMessage = () => {
    vm.$http.post('http://localhost:8080/api/brand', { msg: vm.message });
  };

  vm.getMessages = () => {
    vm.$http.get('http://localhost:8080/api/brand').then((result) => {
      vm.messages = result.data;
    });
  };
}

MainController.$inject = ['$http'];

angular.module('myApp').controller('MainController', MainController);
