const assert = require('chai').assert; //assert to determine the status of the failure
const callfunction = require('./windchillBl');

describe('callfunction windchillbl.js', () => { //holds collection of test
    
    it("should not be null", () => {
        assert.isNotNull(callfunction.findWindChill(), false);
    });
    it("should not be character", () => {
        assert.notEqual(callfunction.findWindChill("abcd"), false);
    });
    it("v should not be negative", () => {
        assert.notEqual(callfunction.findWindChill(10,-15), false);
    });
   
    
});