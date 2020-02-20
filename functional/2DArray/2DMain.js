/******************************************************************************
	 *  Execution       :   1. default node         cmd> node 2DMain.js
	 *                      2. if nodemon installed cmd> nodemon 2DMain.js
	 *
	 *  Purpose         : to print function of 2DArray. 
	 *
	 *  @description    : A library for reading in 2DArrays of integers, doubles, or booleans from user input and printing them...
	 *
	 *  @file           : 2DMain.js
	 *  @overview       : integers ,booleans and doubles printing in 2DArray. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 20-02-2020
	 ******************************************************************************/
const lib = require('./2DBL');
try {
    // For Interger.
    let intArr = lib.readIntArr();
    lib.printIntArr(intArr);
    // For Float.
    let floatArr = lib.readFloatArr();
    lib.printFloatArr(floatArr);
    // For int.
    let boolArr = lib.readBoolArr();
    lib.printFloatArr(boolArr);
} catch (err) {
    console.log(err);
}