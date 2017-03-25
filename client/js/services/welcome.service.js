/**
  * @ngdoc method
  * @name welcomeService
  * @methodOf module.welcomeService
  * @description
  * Welcome Page service with signup login
  *
  * @returns {}
*/
function welcomeService() {
  return {
    section: [
      {
        tagline: 'tagline',
        msg: 'msg',
        image: '',
      },
      {
        tagline: 'tagline 2',
      },
    ],
  };
}

angular.module('myApp').factory('welcomeService', welcomeService);
