
/******************************************************************************
	 *  Execution       :   1. default node         cmd> node 2pastackMain.js
	 *                      2. if nodemon installed cmd> nodemon 2pastackMain.js
	 *
	 *  Purpose         : to print prime anagram numbers in stack. 
	 *
	 *  @description    :to print prime numbers as well as anagram in given range and then  it has to store in stack ...
	 *
	 *  @file           : 2pastackMain.js
	 *  @overview       : stack . 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 22-02-2020
	 ******************************************************************************/
    const callfunction = require('./2pastackBL');
    try {
        let stack = callfunction.getAnagram();
        while (!stack.isEmpty()) {
            console.log(stack.pop());
        }
    }
    catch (err) {
        console.log(err);
    }