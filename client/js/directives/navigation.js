/**
 * @ngdoc directive
 * @name navigationBar
 * @methodOf module.navigationBar
 * @description
 * custom directive for navigationBar
 *
 * @returns { }
 */
function navigationBar() {
  return {
    restrict: 'AEC',
    templateUrl: '../views/templates/navigation.html',
  };
}

angular.module('myApp').directive('navigationBar', navigationBar);
