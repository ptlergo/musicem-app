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
    const user = firebase.auth().currentUser;

    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {

            if (user !== null) {

              user.providerData.forEach(function (profile) {

                console.log("Sign-in provider: "+profile.providerId);
                console.log("  Provider-specific UID: "+profile.uid);
                console.log("  Name: "+profile.displayName);
                console.log("  Email: "+profile.email);
                console.log("  Photo URL: "+profile.photoURL);

              });

            }

        } else {
          // No user is signed in.
          console.log('user nittt ' + user);

        }

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
