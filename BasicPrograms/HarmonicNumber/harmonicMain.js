/******************************************************************************
	 *  Execution       :   1. default node         cmd> node harmonicMain.js
	 *                      2. if nodemon installed cmd> nodemon harmonicMain.js
	 *
	 *  Purpose         : to find harmonic number.
	 *
	 *  @description    : taking the input from user and applying it into the given formula to find the harmonic number...
	 *
	 *  @file           : harmonicMain.js
	 *  @overview       : find the harmonic number from  given input. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 17-02-2020
	 ******************************************************************************/

const readline = require('readline-sync');
const callFunction = require('./harmonicBL');
try {
	let harmonicnumber = readline.questionInt("enter number: ");
	let result = callFunction.checkharmonic(harmonicnumber);
	console.log(result);
}
catch (error) {
	console.log(error);
}