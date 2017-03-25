/**
 * @ngdoc method
 * @name WelcomeController
 * @methodOf module.WelcomeController
 * @description
 * Controler for Welcome Page
 *
 * @returns {}
 */
function WelcomeController(welcomeService) {
  const vm = this;
  vm.ws = welcomeService.section;
  vm.msg = 'welcome controller';
}

WelcomeController.$inject = ['welcomeService'];

angular.module('myApp').controller('WelcomeController', WelcomeController);
