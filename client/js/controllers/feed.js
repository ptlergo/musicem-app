angular.
  module('myApp').
  controller('FeedController', FeedController);

FeedController.$inject = ['$http'];

/**
  * @ngdoc method
  * @name FeedController
  * @methodOf module.FeedController
  * @description
  * Control for Feed body content
  *
  * @returns {}
*/
function FeedController ($http) {

    const vm = this;
    const feedSrc = 'http://www.thefader.com/feed.rss';
    const urlRss = 'http://api.rss2json.com/v1/api.json';
    const apiKey = 'rsjqoqfm1w9y3nvmhvkbnimhmjwotevoi89uabuh';
    const feedCount = 10;

    $http({
        dataType: 'json',
        method: 'GET',
        params: {

          api_key: apiKey,
          count: feedCount,
          rss_url: feedSrc,

        },
        url: urlRss,

    }).
    success((response) => {

        vm.data = {
            feedImage: response.feed.image,
            feedItems: response.items,
            feedTitle: response.feed.title,
        };
        console.log(vm.data.feedItems);
        console.log(vm.data.feedItems[0].title);

    });

};
