angular.module('myApp').
  factory('FeedService', FeedService);

FeedService.$inject = ['$http'];

/**
  * @ngdoc method
  * @name FeedService
  * @methodOf module.FeedService
  * @description
  * Websites feeds
  *
  * @returns {}
*/
function FeedService ($http) {

    return {

        parseFeed: () => {

            const urlRss = 'http://api.rss2json.com/v1/api.json';
            const rssUrl = 'https://techcrunch.com/rss';
            const apiKey = 'rsjqoqfm1w9y3nvmhvkbnimhmjwotevoi89uabuh';
            const feedCount = 10;

            $http({

                dataType: 'json',
                method: 'GET',
                params: {

                    api_key: apiKey,
                    count: feedCount,
                    rss_url: rssUrl,

                },
                url: urlRss,

            }).success((data) => {

                console.log(data);

            });

        }
    };

};
