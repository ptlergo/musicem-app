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

        parseFeed: (url) => {

          return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&amp;num=50&amp;callback=JSON_CALLBACK&amp;q='+
            encodeURIComponent(url));

        }
    };

};
