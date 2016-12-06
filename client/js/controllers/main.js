angular.
  module('myApp').
  controller('MainController', MainController);

/**
  * @ngdoc method
  * @name MainController
  * @methodOf module.MainController
  * @description
  * User login options
  *
  * @returns {}
*/
function MainController () {

    var vm = this;
    vm.message = 'main controller connect :)!';

};
