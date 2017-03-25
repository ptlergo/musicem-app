/**
 * @ngdoc directive
 * @name feedsContainer
 * @methodOf module.feedsContainer
 * @description
 * custom directive for homepage feeds
 *
 * @returns { }
 */
function feedsContainer() {
  return {
    restrict: 'AEC',
    templateUrl: '../views/feeds-container.html',
  };
}

angular.module('myApp').directive('feedsContainer', feedsContainer);
