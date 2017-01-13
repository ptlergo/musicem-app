angular.
  module('myApp').
  controller('LogoutController', LogoutController);

LogoutController.$inject = ['Auth', '$state'];
/**
  * @ngdoc method
  * @name LogoutController
  * @methodOf module.LogoutController
  * @description
  * User logout options
  *
  * @returns {}
*/
function LogoutController (Auth, $state) {

    const vm = this;

    vm.user = {
        email: '',
        password: '',
    };

    vm.logout = () => {

      console.log('logout clicked');

    };

};
