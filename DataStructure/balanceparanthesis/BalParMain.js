/******************************************************************************
	 *  Execution       :   1. default node         cmd> node BalParMain.js
	 *                      2. if nodemon installed cmd> nodemon BalParMain.js
	 *
	 *  Purpose         : balance paranthesis.
	 *
	 *  @description    : to check if the paranthesis are balanced or not...
	 *
	 *  @file           : BalParMain.js
	 *  @overview       : checking balance paranthesis. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 17-02-2020
	 ******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./BalParBL');
try {
    let expression = readline.question("enter the Arthemetic expression")
    let result = callfunction.isBalanced(expression);
    console.log(result);
} catch (err) {
    throw err;
}