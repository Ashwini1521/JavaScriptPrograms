/******************************************************************************
	 *  Execution       :   1. default node         cmd> node power2Main.js
	 *                      2. if nodemon installed cmd> nodemon power2Main.js
	 *
	 *  Purpose         : to find power of 2. 
	 *
	 *  @description    : prints a table of the powers of 2 that are less than or equal to 2^N....
	 *
	 *  @file           : power2Main.js
	 *  @overview       : printing table of power of 2. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 17-02-2020
	 ******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./power2BL');
try {
    let number = readline.questionInt("Enter number :");
   let result= callfunction.power2(number);
   console.log(result);

} catch (error) {
    console.log(error);
}