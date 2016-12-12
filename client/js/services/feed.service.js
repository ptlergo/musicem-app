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

    const test = 'ehllo';

    return test;

};
