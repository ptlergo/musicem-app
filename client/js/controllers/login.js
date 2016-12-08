angular.
  module('myApp').
  controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['Auth', '$state'];
/**
  * @ngdoc method
  * @name LoginCtrl
  * @methodOf module.LoginCtrl
  * @description
  * User login options
  *
  * @returns {}
*/
function LoginCtrl (Auth, $state) {

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

};
