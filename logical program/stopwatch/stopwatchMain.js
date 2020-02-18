/******************************************************************************
	 *  Execution       :   1. default node         cmd> node stopwatchMain.js
	 *                      2. if nodemon installed cmd> nodemon stopwatchMain.js
	 *
	 *  Purpose         : timer .
	 *
	 *  @description    : to give the time between the start time and the stop time...
	 *
	 *  @file           : stopwatchMain.js
	 *  @overview       : find the time. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 18-02-2020
	 ******************************************************************************/
const readline = require('readline-sync');
const callFunction = require('./stopwatchBL');
try {
    let elapseTime;
    elapseTime = callFunction.getElapseTime(); //calling getElapseTime
    console.log("Elapse time is: " + Math.floor(elapseTime / 1000) + " sec");
}
catch (err) {
    console.log(err);
}
