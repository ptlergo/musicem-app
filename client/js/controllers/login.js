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
      const userProfile = provider.addScope('public_profile');
      console.log('facebook login clicked');
      console.log(userProfile);


    };

};
