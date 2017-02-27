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

}

nodeService.$inject = ['$http', '$resource'];
angular.module('myApp').service('nodeService', nodeService);
