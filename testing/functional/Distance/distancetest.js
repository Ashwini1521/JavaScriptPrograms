const assert = require('chai').assert; //assert to determine the status of the failure
const callfunction = require('./distanceBl');

describe('get if callfunction distanceBl.js', () => { //holds collection of test
    
    it("should not be null", () => { //it calls itself
        assert.isNotNull(callfunction.distance(), false);
    });
    it("should not be character", () => {
        assert.notEqual(callfunction.distance("abcd"), false);
    });
    it("should not be negative", () => {
        assert.notEqual(callfunction.distance(-12), false);
    });
    
});