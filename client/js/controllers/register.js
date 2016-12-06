angular.
  module('myApp').
  controller('RegController', RegController);

/**
  * @ngdoc method
  * @name RegController
  * @methodOf module.RegController
  * @description
  * User registration options
  *
  * @returns {}
*/
function RegController () {

    var vm = this;
    vm.message = 'register view connect :)!';

};
