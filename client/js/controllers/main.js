angular.
  module('myApp').
  controller('MainCtrl', MainCtrl);

/**
  * @ngdoc method
  * @name MainCtrl
  * @methodOf module.MainCtrl
  * @description
  * Ctrl for main body content
  *
  * @returns {}
*/
function MainCtrl () {

    var vm = this;
    vm.message = 'main Ctrl connected';

};
