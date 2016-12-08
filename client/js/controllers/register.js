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

    const vm = this;
    const auth = $firebaseAuth();
    vm.message = 'register view connect :)!';

    vm.signIn = () => {

        vm.firebaseUser = null;
        vm.error = null;

        auth.$signInAnonymously().then((firebaseUser) => {

            vm.firebaseUser = firebaseUser;

        }).
        catch((error) => {

            vm.error = error;

        });

    };

};
