/******************************************************************************
	 *  Execution       :   1. default node         cmd> node calenderMain.js
	 *                      2. if nodemon installed cmd> nodemon calenderMain.js
	 *
	 *  Purpose         : to print calender. 
	 *
	 *  @description    :to print calender with day of week and date , year using 2Darray...
	 *
	 *  @file           : calenderMain.js
	 *  @overview       : calender  . 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 22-02-2020
	 ******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./calenderBL');
try {

   // let month = readline.questionInt("enter the month : ");
    //let year = readline.questionInt("enter the year : ");
    var ans = callfunction.calendar(process.argv[2], process.argv[3]);
}
catch (error) {
    console.log(error);
}