angular.
  module('myApp').
  controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['Auth', '$state'];
/**
  * @ngdoc method
  * @name LoginCtrl
  * @methodOf module.LoginCtrl
  * @description
  * User login options
  *
  * @returns {}
*/
function LoginCtrl (Auth, $state) {

  console.log(Auth);
};
