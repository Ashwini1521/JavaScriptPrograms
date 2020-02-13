

/******************************************************************************
	 *  Execution       :   1. default node         cmd> node binaryMain.js
	 *                      2. if nodemon installed cmd> nodemon binaryMain.js
	 *
	 *  Purpose         : BinarySearch.
	 *
	 *  @description    : Searching for a string key in a string array and displaying key if key is found in array then it return true  else key is not found in the given array it return false...
	 *
	 *  @file           : binaryMain.js
	 *  @overview       : find the string key i given array. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 13-02-2020
	 ******************************************************************************/
let readline = require('readline-sync');
let callFunction = require('./binaryBL');
try {
    let array = [];
    let arraysize = readline.question("Enter size of an array : ");
    for (var i=0; i<arraysize; i++){
        array[i] = readline.question("array element is: ");
    }
    let String = readline.question("Enter String to check in array : ");
    let Binary = callFunction.Binary(array,String);
    console.log(Binary);
} catch (error) {
    console.log(error);
}