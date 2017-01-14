angular.
  module('myApp').
  controller('UserController', UserController);

UserController.$inject = ['Auth', '$state'];
/**
  * @ngdoc method
  * @name UserController
  * @methodOf module.UserController
  * @description
  * Content of logged in user
  *
  * @returns {}
*/
function UserController (Auth, $state) {

  console.log('user stuff');
  const vm = this;
  vm.name = 'default name';

};
