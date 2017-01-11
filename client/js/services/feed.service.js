angular.module('myApp').
  factory('FeedService', FeedService);

FeedService.$inject = ['$http'];

/**
  * @ngdoc method
  * @name FeedService
  * @methodOf module.FeedService
  * @description
  * Websites feeds
  *
  * @returns {}
*/
function FeedService ($http) {

    return {

        parseFeed: (url) => {

            return $http.jsonp(url + '?callback=JSON_CALLBACK', []).
              success((data, status) => {

                  console.log(data.posts[0].content);

              });

        }
    };

};


// $.ajax({
//     url: 'http://api.rss2json.com/v1/api.json',
//     method: 'GET',
//     dataType: 'json',
//     data: {
//         rss_url: 'https://8pounds.com/rss',
//         api_key: 'rsjqoqfm1w9y3nvmhvkbnimhmjwotevoi89uabuh', // put your api key here
//         count: 10
//     }
//   }).done(function (response) {
// if(response.status != 'ok'){ throw response.message; }
//
// console.log('====== ' + response.feed.title + ' ======');
//
// for(var i in response.items){
//     var item = response.items[i];
//     console.log(item.title);
//
// }
// });
