angular.
  module('myApp').
  directive('feedsContainer', feedsContainer);

  /**
    * @ngdoc directive
    * @name feedsContainer
    * @methodOf module.feedsContainer
    * @description
    * custom directive for homepage feeds
    *
    * @returns { }
  */
function feedsContainer () {

    return {templateUrl: '../../views/home.html'};

};
