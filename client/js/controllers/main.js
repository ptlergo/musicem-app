angular.
  module('myApp').
  controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['FeedService'];

/**
  * @ngdoc method
  * @name MainCtrl
  * @methodOf module.MainCtrl
  * @description
  * Ctrl for main body content
  *
  * @returns {}
*/
function MainCtrl (FeedService) {

    const vm = this;

    vm.message = 'main Ctrl connected';

};
