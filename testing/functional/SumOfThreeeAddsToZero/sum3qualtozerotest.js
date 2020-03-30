const assert = require('chai').assert; //assert to determine the status of the failure
const callfunction = require('./sum3equaltozeroBl');

describe('get if callfunction sum3equaltozeroBl.js', () => { //holds collection of test
    
    it("should not be null", () => {
        assert.isNotNull(callfunction.findTriples(), false);
    });
    it("should not be character", () => {
        assert.notEqual(callfunction.findTriples("abcd"), false);
    });
   
    
});