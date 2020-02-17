/******************************************************************************
	 *  Execution       :   1. default node         cmd> node usernameMain.js
	 *                      2. if nodemon installed cmd> nodemon usernameMain.js
	 *
	 *  Purpose         : Replacing username to String Template 
	 *
	 *  @description    : Replacing username to given String Template as “Hello <<UserName>>, How are you?” ..
	 *
	 *  @file           : usernameMain.js
	 *  @overview       : replacement of username. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 17-02-2020
	 ******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./usernameBL');
try {
    let username = readline.question("Enter your name : ");
    let result = callfunction.checkusername(username);
} catch (error) {
    console.log(error);
}