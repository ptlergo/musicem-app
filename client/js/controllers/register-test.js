angular.
  module('myApp').
  controller('RegisterController', RegisterController);

RegisterController.$inject = ['Auth'];

/**
  * @ngdoc method
  * @name RegisterController
  * @methodOf module.RegisterController
  * @description
  * User registration options using angularFire
  *
  * @returns {}
*/
function RegisterController (Auth) {

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
