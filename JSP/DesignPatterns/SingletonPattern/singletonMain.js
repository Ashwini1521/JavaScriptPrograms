/******************************************************************************
	 *  Execution       :   1. default node         cmd> node singletonMain.js
	 *                      2. if nodemon installed cmd> nodemon singletonMain.js
	 *
	 *  Purpose         : to design singleton pattern. 
	 *
	 *  @description    :designed  singleton pattern ...
	 *
	 *  @file           : singletonMain.js
	 *  @overview       : singleton design. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 18-03-2020
	 ******************************************************************************/
const callfunction = require('./singletonBl');
try {

    let obj1 = callfunction.getInstance();
    let obj2 = callfunction.getInstance();

    console.log(obj1 === obj2);
} catch (err) {
    console.log(err);
}