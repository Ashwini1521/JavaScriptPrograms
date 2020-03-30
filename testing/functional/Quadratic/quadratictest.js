const assert = require('chai').assert; //assert to determine the status of the failure
const callfunction = require('./quadraticBl');

describe('get if callfunction quadraticBl.js', () => { //holds collection of test
    
    it("should not be null", () => {
        assert.isNotNull(callfunction.findQuadratic(), false);
    });
    it("should not be character", () => {
        assert.notEqual(callfunction.findQuadratic("abcd"), false);
    });
   
});