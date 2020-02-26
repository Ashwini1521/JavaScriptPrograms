/******************************************************************************
	 *  Execution       :   1. default node         cmd> node usernametest.js
	 *                      2. if nodemon installed cmd> nodemon usernametest.js
	 *
	 *  Purpose         : testing.. 
	 *
	 *  @description    : taking input and checks the length of name and returns hello...
	 *
	 *  @file           : usernametest.js
	 *  @overview       : unittest using mocha chai. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 26-02-2020
	 ******************************************************************************/
console.log("getting into the test file");
const assert = require('chai').assert;
const UN = require('../BasicPrograms/username');
describe('Check username from UN', () => {
    it('should be greaterthan 3', () => {
        assert.equal(UN.username(), 'name');
    })
})