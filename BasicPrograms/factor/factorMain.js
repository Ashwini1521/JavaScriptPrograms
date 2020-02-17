/******************************************************************************
	 *  Execution       :   1. default node         cmd> node factorMain.js
	 *                      2. if nodemon installed cmd> nodemon factorMain.js
	 *
	 *  Purpose         : finding primefactorisation. 
	 *
	 *  @description    : Computes the prime factorization of N using brute force...
	 *
	 *  @file           : factorMain.js
	 *  @overview       : primefactorisation. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 17-02-2020
	 ******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./factorBL');
try {
    let number = readline.questionInt("Enter number :");
    let result = callfunction.factor(number);
    console.log(result);

} catch (error) {
    console.log(error);
}