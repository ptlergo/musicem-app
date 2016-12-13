angular.
  module('myApp').
  controller('SuccessController', SuccessController);

/**
  * @ngdoc method
  * @name SuccessController
  * @methodOf module.SuccessController
  * @description
  * Indicate login/register success
  *
  * @returns {}
*/
function SuccessController () {

    const vm = this;

    vm.message = 'SUCCESS connect :)!';

};
