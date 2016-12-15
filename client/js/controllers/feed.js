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
  vm.count = ['a', 'b', 'c', 'd', 'e', 'f'];
  vm.store = [];
  vm.message = 'teseting';
  $http.get('http://track.superfeedr.com/?query=site%3Athefader.com').success((data) => {
    vm.t = angular.toJson(data);
    console.log(vm.t);
  });


};
