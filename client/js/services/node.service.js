/**
 * @ngdoc service
 * @name nodeService
 * @methodOf module.nodeService
 * @description
 * custom service to connect routes from node server
 *
 * @returns { }
 */
function nodeService($http) {
  return {
    // Get all data from api route 'test'
    get: () => {
      return $http.get('/api/test');
    },

    // Create new item under api route 'test'
    post: () => {
      return $http.get('/api/test', newData);
    },

    // Delete item from api route 'test'
    delete: () => {
      return $http.get('/api/test' + id);
    },
  };
}

nodeService.$inject = ['$http', '$resource'];
angular.module('myApp').service('nodeService', nodeService);
