/******************************************************************************
	 *  Execution       :   1. default node         cmd> node bubblesortMain.js
	 *                      2. if nodemon installed cmd> nodemon bubblesortMain.js
	 *
	 *  Purpose         : usage of bubblesort .
	 *
	 *  @description    : taking the array elements from user and sorting those array elements using bubblesort...
	 *
	 *  @file           : bubblesortMain.js
	 *  @overview       : find the harmonic number from  given input. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 18-02-2020
	 ******************************************************************************/
let readline = require('readline-sync');
let callFunction = require('./bubblesortBL');
try {
    let size = readline.question('enter size ');
    let a = [];
    for (let j = 0; j < size; j++) {
        a[j] = readline.question("enter elements ");
    }
    let bub = callFunction.bubblesort(a); //calling bubblesort()
    console.log(bub);
}
catch (err) {
    console.log(err);
}