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

        const provider = new firebase.auth.FacebookAuthProvider();

        console.log('facebook login clicked');
        console.log(provider);

        firebase.auth().signInWithPopup(provider).
          then((result) => {
            console.log(result);


              const token = result.credential.accessToken;
              const user = result.user;

              const userProf = provider.addScope('public_profile');
              console.log(userProf);

          }).
          catch((error) => {

              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.email;
              const credential = error.credential;

          });

    };

};
