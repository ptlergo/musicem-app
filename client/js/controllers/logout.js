angular.
  module('myApp').
  controller('LogoutController', LogoutController);

LogoutController.$inject = ['Auth', '$state'];
/**
  * @ngdoc method
  * @name LogoutController
  * @methodOf module.LogoutController
  * @description
  * User logout options
  *
  * @returns {}
*/
function LogoutController (Auth, $state) {

    const vm = this;

    vm.user = {
        email: '',
        password: '',
    };

    vm.logout = () => {

        const provider = new firebase.auth.FacebookAuthProvider();

        console.log('logout clicked');

        firebase.auth().signOut().
        then(() => {

          console.log('success logout');

        },
        (error) => {

          console.log('Error logout!');

        });

    };

};
