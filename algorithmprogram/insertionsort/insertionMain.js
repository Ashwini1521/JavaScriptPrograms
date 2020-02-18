/******************************************************************************
	 *  Execution       :   1. default node         cmd> node insertionsortMain.js
	 *                      2. if nodemon installed cmd> nodemon insertionsortMain.js
	 *
	 *  Purpose         : usage of insertionsort .
	 *
	 *  @description    : taking the array elements from user and sorting those array elements using insertionsort...
	 *
	 *  @file           : insertionsortMain.js
	 *  @overview       : find the sorted array using insertionsort. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 18-02-2020
	 ******************************************************************************/
const readline = require('readline-sync');
const callFunction = require("./insertionBL");
try {
    let size = readline.question('enter size ');
    let a = [];
    for (let j = 0; j < size; j++) {
        a[j] = readline.question("enter String elements ");
    }
    let insertion = callFunction.insertionsort(a); //calling insertionsort()
    console.log(insertion);
}
catch (err) {
    console.log(err);
}