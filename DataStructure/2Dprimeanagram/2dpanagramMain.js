/******************************************************************************
	 *  Execution       :   1. default node         cmd> node 2dpanagramMain.js
	 *                      2. if nodemon installed cmd> nodemon 2dpanagramMain.js
	 *
	 *  Purpose         : to print prime anagram numbers. 
	 *
	 *  @description    :to print prime numbers as well as anagram of that array...
	 *
	 *  @file           : 2dpanagramMain.js
	 *  @overview       : prime anagram. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 21-02-2020
	 ******************************************************************************/
const readline = require('readline-sync');
const callFunction = require('./2dpanagramBL');

try {
    const range = readline.question('enter the range of number ');
    let result= callFunction.primeNumbersGenerator(range);
    console.table(result);
}
catch (err) {
    console.log(err);
}