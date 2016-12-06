angular.
  module('myApp').
  controller('LoginController', LoginController);

/**
  * @ngdoc method
  * @name LoginController
  * @methodOf module.LoginController
  * @description
  * User login options
  *
  * @returns {}
*/
function LoginController () {

    var vm = this;
    vm.message = 'login view connect :)!';

};
