angular.
  module('myApp').
  controller('MainController', MainController);

/**
  * @ngdoc method
  * @name MainController
  * @methodOf module.MainController
  * @description
  * Controller for main body content
  *
  * @returns {}
*/
function MainController () {

    var vm = this;
    vm.message = 'main controller connected';

};
