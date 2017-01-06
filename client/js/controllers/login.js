angular.
  module('myApp').
  controller('LoginController', LoginController);

LoginController.$inject = ['Auth', '$state'];
/**
  * @ngdoc method
  * @name LoginController
  * @methodOf module.LoginController
  * @description
  * User login options
  *
  * @returns {}
*/
function LoginController (Auth, $state) {

    const vm = this;

    vm.user = {
        email: '',
        password: '',
    };

    vm.login = () => {

        firebase.auth().
          signInWithEmailAndPassword(vm.user.email, vm.user.password).
          then((auth) => {
            console.log(auth);

              $state.go('home');

          }, (error) => {

              vm.error = error;

          });

    };

    vm.fblogin = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        console.log('facebook login clicked');

        firebase.auth().signInWithPopup(provider).
          then((result) => {

            var token = result.credential.accessToken;
            var user = result.user;
            const userProfile = provider.addScope('public_profile');
              console.log(userProfile);

      }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;

      });

    };

};
