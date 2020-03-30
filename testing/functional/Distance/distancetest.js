const assert = require('chai').assert; //assert to determine the status of the failure
const callfunction = require('./add.js');

describe('get if callfunction add.js', () => { //holds collection of test
    
    it("should not be null", () => {
        assert.isNotNull(callfunction.distance(), false);
    });
    it("should not be character", () => {
        assert.notEqual(callfunction.distance("abcd"), false);
    });
    it("should not be negative", () => {
        assert.notEqual(callfunction.distance(-12), false);
    });
    
});