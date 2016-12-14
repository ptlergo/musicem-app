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
  vm.store = [];
  vm.message = 'teseting';
  $http.get('http://8pounds.com/feed/').success((data) => {
    vm.store = data;
    console.log(vm.store);
  });


};
