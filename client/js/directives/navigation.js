angular.
  module('myApp').
  directive('navigationBar', navigationBar);

/**
  * @ngdoc directive
  * @name navigationBar
  * @methodOf module.navigationBar
  * @description
  * custom directive for navigationBar
  *
  * @returns { }
*/
function navigationBar () {

    return {

        restrict: 'E',
        templateUrl: '../views/templates/navigation.html'

    };

};
