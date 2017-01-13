/* TODO: test new service format. one function instead of function callbacks.
         maybe remove the http request from service into controller where that
         call is before the service call.
*/

angular.module('myApp').
  factory('FeedService', FeedService);

FeedService.$inject = ['$http'];

/**
  * @ngdoc method
  * @name FeedService
  * @methodOf module.FeedService
  * @description
  * Uses rss2json API to manipulate a website's rss xml to json
  *
  * @returns {Obj} data object of website's rss
*/
function FeedService ($http, feedSrc) {

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

        const data = {
            feedImage: response.feed.image,
            feedItems: response.items,
            feedTitle: response.feed.title,
        };

    }).
    error((response) => {

      console.log('!error with feed.service.js!');

        return '!error with feed.service.js!' + response;

    });

};
