/******************************************************************************
	 *  Execution       :   1. default node         cmd> node harmonictest.js
	 *                      2. if nodemon installed cmd> nodemon harmonictest.js
	 *
	 *  Purpose         : testing.. 
	 *
	 *  @description    : taking input and returns harmonic sum...
	 *
	 *  @file           : harmonictest.js
	 *  @overview       : unittest using mocha chai. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 26-02-2020
	 ******************************************************************************/
const assert = require('chai').assert;
const HN = require('../BasicPrograms/harmonic');
describe("Harmonic", () => {
    it("should take integer only", () => {
        assert.equal(HN.getHarmonicNum(2), 1.5);
    });
    it("should not take decimal", () => {
        assert.equal(HN.getHarmonicNum(1.5), "undefined");
    });
    it("should not take character", () => {
        assert.equal(HN.getHarmonicNum("abcd"), "undefined");
    });
    it("should not take special symbol", () => {
        assert.equal(HN.getHarmonicNum("@#$%^&*"), "undefined");
    });

});