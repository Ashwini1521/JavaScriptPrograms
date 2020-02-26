/******************************************************************************
	 *  Execution       :   1. default node         cmd> node leaptest.js
	 *                      2. if nodemon installed cmd> nodemon leaptest.js
	 *
	 *  Purpose         : testing.. 
	 *
	 *  @description    : taking input and returns leapyear...
	 *
	 *  @file           : leaptest.js
	 *  @overview       : unittest using mocha chai. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 26-02-2020
	 ******************************************************************************/
const assert = require('chai').assert; //assert to determine the status of the failure
const leap = require("../BasicPrograms/leap");
describe('get if leap year or not from leap.js', () => { //holds collection of test
    it('should be a 4 digit number', () => { //it() is the test itself

        assert.equal(leap.isLeap(2019), false);
    });
    it("should not be negative", () => {
        assert.equal(leap.isLeap(-1929), false);
    });
    it("should not be decimal number", () => {
        assert.equal(leap.isLeap(1.2), false);
    });
    it("should not be a string or a character", () => {
        assert.equal(leap.isLeap("abdc"), false);
    });
    it("should not be less than 4 digits", () => {
        assert.equal(leap.isLeap(193), false);
    });
    it("for leap year should return true", () => {
        assert.equal(leap.isLeap(1600), true);
    });
});