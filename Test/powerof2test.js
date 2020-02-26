/******************************************************************************
	 *  Execution       :   1. default node         cmd> node powerof2test.js
	 *                      2. if nodemon installed cmd> nodemon powerof2test.js
	 *
	 *  Purpose         : testing.. 
	 *
	 *  @description    : taking input and returns power...
	 *
	 *  @file           : powerof2test.js
	 *  @overview       : unittest using mocha chai. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 26-02-2020
	 ******************************************************************************/
const assert = require('chai').assert; //assert to determine the status of the failure
const power = require("../BasicPrograms/powerof2");
describe('get powerof2 powerof2.js', () => { //holds collection of test
    it('number should be divisible by 2', () => { //it() is the test itself

        assert.equal(power.powerof2(32), 0);
    });
});