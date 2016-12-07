angular.
  module('myApp').
  controller('LoginCtrl', LoginCtrl);

/**
  * @ngdoc method
  * @name LoginCtrl
  * @methodOf module.LoginCtrl
  * @description
  * User login options
  *
  * @returns {}
*/
function LoginCtrl () {

    var vm = this;
    vm.message = 'login view connect :)!';

};
