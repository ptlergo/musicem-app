angular.
  module('myApp').
  controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['FeedService'];

/**
  * @ngdoc method
  * @name MainCtrl
  * @methodOf module.MainController
  * @description
  * Control for main body content
  *
  * @returns {}
*/
function MainController (FeedService) {

    const vm = this;
    const feedSrc = 'http://track.superfeedr.com/?query=site%3Athefader.com';
    vm.message = FeedService.parseFeed(feedSrc);
    vm.img = 'http://i.imgur.com/OUiua38.jpg';

    console.log(vm.message);

};
