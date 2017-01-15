angular.
  module('myApp').
  controller('UserController', UserController);

UserController.$inject = ['Auth', '$state'];
/**
  * @ngdoc method
  * @name UserController
  * @methodOf module.UserController
  * @description
  * Content of logged in user
  *
  * @returns {}
*/
function UserController (Auth, $state) {

    const vm = this;
    const database = firebase.database();

    function writeUserData(email) {

        firebase.database().
        set({

            email: email,

        }).then((name) => {console.log('dd'+email);});

    };

    firebase.auth().onAuthStateChanged(function(user) {
      const vm = this;


        vm.user = user.uid;
        console.log('herrr ' + vm.user);

        if (user) {


              user.providerData.forEach(function (profile) {

                console.log("Sign-in provider: "+profile.providerId);
                console.log("  Provider-specific UID: "+profile.uid);
                console.log("  Name: "+profile.displayName);
                console.log("  Email: "+profile.email);
                console.log("  Photo URL: "+profile.photoURL);


            });
            vm.user = 'f';

        } else {
          // No user is signed in.
          console.log('user not logged in! ' + user);

        }

        const userRef = firebase.database().ref('users');
        userRef.on('g', (callback) => {
          console.log(callback);
        });
    });
};


// firebase.auth().onAuthStateChanged((user) => {
//
//
//     if (user) {
//
//     // User is signed in.
//         const [email, emailVerified, name, photoUrl, uid] = [user.email,
//             user.emailVerified, user.displayName, user.photoUrl, user.uid];
//
        // if (user != null) {
        //   user.providerData.forEach(function (profile) {
        //     console.log("Sign-in provider: "+profile.providerId);
        //     console.log("  Provider-specific UID: "+profile.uid);
        //     console.log("  Name: "+profile.displayName);
        //     console.log("  Email: "+profile.email);
        //     console.log("  Photo URL: "+profile.photoURL);
        //   });
        // }
//
//
//     } else {
//
//       // No user is signed in.
//       console.log('user is not signed in');
//
//     }
//     console.log(user.email + ' stuff signed in');
//
// });
