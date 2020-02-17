/******************************************************************************
	 *  Execution       :   1. default node         cmd> node leapMain.js
	 *                      2. if nodemon installed cmd> nodemon leapMain.js
	 *
	 *  Purpose         : to check leap year. 
	 *
	 *  @description    : to check given input year is leapyear or not...
	 *
	 *  @file           : leapMain.js
	 *  @overview       : checking leapyear. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 17-02-2020
	 ******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./leapBL');
try {
	let year = readline.questionInt("enter 4 digit year : ");
	callfunction.leapyear(year);
	// return result;
} catch (error) {
	console.log(error);
}