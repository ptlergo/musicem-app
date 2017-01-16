angular.
  module('myApp').
  controller('FeedController', FeedController);

FeedController.$inject = ['FeedService'];

/**
  * @ngdoc method
  * @name FeedController
  * @methodOf module.FeedController
  * @description
  * Control for Feed body content
  *
  * @returns {}
*/
function FeedController (FeedService) {

    const vm = this;
    const feedSrc = 'http://track.superfeedr.com/?query=site%3Athefader.com';
    vm.m = FeedService.parseFeed(feedSrc);
    vm.message = 'hello';
    vm.img = 'http://i.imgur.com/OUiua38.jpg';
    console.log(vm.m);
};
