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
    const feedSrc = 'https://techcrunch.com/rss';

    vm.test = FeedService.parseFeed(feedSrc);
    vm.img = 'http://i.imgur.com/OUiua38.jpg';

    // TODO: ?data from the FeedService's parseFeed function that returns an object from a url request?
    console.log(FeedService.parseFeed(feedSrc).response);

};
