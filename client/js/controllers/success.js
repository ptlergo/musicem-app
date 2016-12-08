angular.
  module('myApp').
  controller('SuccessCtrl', SuccessCtrl);

/**
  * @ngdoc method
  * @name SuccessCtrl
  * @methodOf module.SuccessCtrl
  * @description
  * Indicate login/register success
  *
  * @returns {}
*/
function SuccessCtrl () {

    const vm = this;

    vm.message = 'SUCCESS connect :)!';

};
