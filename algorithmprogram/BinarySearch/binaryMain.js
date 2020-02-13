

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
    const readline = require('readline-sync');
    const callfunction = require('./binaryBL');
    
    
    const fs=require('fs');
    async function test() {
    try {
    let file = await callfunction.filereading();
    console.log("in main",file);
    let string1=readline.question("Enter the string to search : ");
    let ans = callfunction.binarysearch(string1,file);
    console.log(ans);
    }
    catch (error) {
    console.log(error);
    }
    }
    
    test();