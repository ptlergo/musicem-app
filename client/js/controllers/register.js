angular.
  module('myApp').
  controller('RegCtrl', RegCtrl);

RegCtrl.$inject = ['$firebaseAuth'];

/**
  * @ngdoc method
  * @name RegCtrl
  * @methodOf module.RegCtrl
  * @description
  * User registration options using angularFire
  *
  * @returns {}
*/
function RegCtrl ($firebaseAuth) {

    var vm = this;
    var auth = $firebaseAuth();
    vm.message = 'register view connect :)!';

};
