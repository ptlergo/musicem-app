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
    const feedSrc = 'http://8pounds.com/feed';
    const feedSrcTest = 'http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts';

    // vm.feedParsed = FeedService.parseFeed(feedSrcTest);
    vm.img = 'http://i.imgur.com/OUiua38.jpg';
    FeedService;

};
