angular.
  module('myApp').
  controller('RegCtrl', RegCtrl);

RegCtrl.$inject = ['Auth'];

/**
  * @ngdoc method
  * @name RegCtrl
  * @methodOf module.RegCtrl
  * @description
  * User registration options using angularFire
  *
  * @returns {}
*/
function RegCtrl (Auth) {

    const vm = this;

    const auth = Auth;


    vm.signIn = () => {

        vm.firebaseUser = null;
        vm.error = null;

        firebase.auth().signInAnonymously().
          then((firebaseUser) => {

              vm.firebaseUser = firebaseUser;
              console.log(vm.firebaseUser);

          }).
          catch((error) => {

              vm.error = error;

          });

    };

};
