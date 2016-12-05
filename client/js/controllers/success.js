angular.
  module('myApp').
  controller('successController', successController);

/**
  * @ngdoc method
  * @name successController
  * @methodOf module.successController
  * @description
  * Indicate login/register success
  *
  * @returns {}
*/
function successController () {

    var vm = this;
    vm.message = 'SUCCESS connect :)!';

};
