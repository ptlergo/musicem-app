/**
 * @ngdoc method
 * @name FeedController
 * @methodOf module.FeedController
 * @description
 * Control for Feed body content
 *
 * @returns {}
 */
function FeedController($http) {
  const vm = this;
  vm.msg = 'feed controller';
}

FeedController.$inject = ['$http'];

angular.module('myApp').controller('FeedController', FeedController);
