const expect = require('chai').expect;
const angular = require('angular-mocks');
require('../client/js/controllers/main');

describe('MainController', () => {
  var MainController;

    beforeEach(() => {

        angular.mock.module('myApp');

        angular.mock.inject(($controller) => {

          MainController = $controller('MainController');

        });
    });

    it('should expose message', (done) => {

        expect(MainController.message).to.be.equal('main controller connected');
        done();

    });

});
