const expect = require('chai').expect;
const numTest = 1;

describe('Sample Test', () => {

    it('First test', (done) => {

        expect(numTest).to.be.equal(numTest);
        done();

    });

});
