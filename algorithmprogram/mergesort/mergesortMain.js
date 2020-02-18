/******************************************************************************
	 *  Execution       :   1. default node         cmd> node mergesortMain.js
	 *                      2. if nodemon installed cmd> nodemon mergesortMain.js
	 *
	 *  Purpose         : usage of mergesort .
	 *
	 *  @description    : taking the array elements from user and sorting those array elements using mergesort...
	 *
	 *  @file           : mergesortMain.js
	 *  @overview       : find the harmonic number from  given input. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 18-02-2020
	 ******************************************************************************/
let readline = require('readline-sync');
let callFunction = require('./mergesortBL');
try {
    var arr = [12, 4, 3, 15, 10, 9];
    console.log("arr");
    let result = callFunction.mergesort(arr, 0, arr.length - 1);
    return result;
} catch (error) {
    console.log(error);
}