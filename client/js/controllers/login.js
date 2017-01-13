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
            console.log(auth);

              $state.go('home');

          }, (error) => {

              vm.error = error;

          });

    };

    vm.facebookLogin = () => {

        const provider = new firebase.auth.FacebookAuthProvider();

        console.log('facebook login clicked');
        console.log(provider);

        firebase.auth().signInWithPopup(provider).
          then((result) => {
            console.log(result);


              const token = result.credential.accessToken;
              const user = result.user;

              /*TODO: utilize facebook references */
              const userProf = provider.addScope('public_profile');
              console.log('user profile: ' + userProf);

          }).
          catch((error) => {

              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.email;
              const credential = error.credential;

          });

    };

    firebase.auth().onAuthStateChanged((user) => {

      if (user) {

        // User is signed in.
        console.log(user .email+ ' signed in');
        console.log(user.uid + ' signed in');


      } else {

        // No user is signed in.
        console.log('user is not signed in');

      }

    });

};
