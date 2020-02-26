const assert = require('chai').assert; //assert to determine the status of the failure
const power = require("../BasicPrograms/powerof2");
describe('get powerof2 powerof2.js', () => { //holds collection of test
    it('number should be divisible by 2', () => { //it() is the test itself

        assert.equal(power.powerof2(32), 0);
    });
});