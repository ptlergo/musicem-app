angular.
  module('myApp').
  controller('SuccessController', SuccessController);

/**
  * @ngdoc method
  * @name successController
  * @methodOf module.successController
  * @description
  * Indicate login/register success
  *
  * @returns {}
*/
function SuccessController () {

    var vm = this;
    vm.message = 'SUCCESS connect :)!';

};
