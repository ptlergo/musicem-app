angular.
  module('myApp').
  controller('LoginController', LoginController);

LoginController.$inject = ['Auth', '$state'];

/**
  * @ngdoc method
  * @name LoginController
  * @methodOf module.LoginController
  * @description
  * User login options: facebook, and email
  *
  * @returns {}
*/
function LoginController (Auth, $state) {

    const vm = this;

    vm.emailLogin = () => {

        firebase.auth().
          signInWithEmailAndPassword(vm.user.email, vm.user.password).
          then((auth) => {

              $state.go('home');

          }, (error) => {

              vm.error = error;

          });

    };

    vm.facebookLogin = () => {

        const provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).
          then((result) => {

              const token = result.credential.accessToken;
              const user = result.user;

          }).
          catch((error) => {

              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.email;
              const credential = error.credential;

          });

    };

};
