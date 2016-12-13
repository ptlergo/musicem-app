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
    const feedSrc = 'http://feeds.feedburner.com/TechCrunch';
    vm.message = FeedService.parseFeed(feedSrc);
    vm.img = 'http://i.imgur.com/OUiua38.jpg';

    console.log(FeedService);

};
