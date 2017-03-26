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
        tagline: 'Welcome to music’em!',
        msg: `A content agregation application that
              fetches your favorite music feeds
              from the best curated brands for your
              personal customizable needs.`,
        image: '../../img/musicem-logo.png',
      },
      {
        tagline: 'Stay informed with music’em!',
        msg: 'Discover new content in no time, and no effort.',
      },
      {
        tagline: 'Discover! Fetch! Feed!',
        msg: `There’s a lot of content out there.
              Too much to waste your time digging through.
              Let music’em find the diamonds in the rough.`,
      },
      {
        tagline: 'Track any curated brands!',
        msg: `We’ve taken the time to allow a select
              amount of trusted brands. These brands are
              the taste makers in the music industry. Our list
              is maintained daily.`,
        image: '',
      },
      {
        tagline: 'Intuitive Features!',
        msg: `Use powerful features such as
              filters, content saving, sharing, and others
              to personalize your own feed.`,
        image: '',
      },
    ],
  };
}

angular.module('myApp').factory('welcomeService', welcomeService);
