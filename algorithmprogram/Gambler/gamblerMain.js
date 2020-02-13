/******************************************************************************
	 *  Execution       :   1. default node         cmd> node gamblerMain.js
	 *                      2. if nodemon installed cmd> nodemon gamblerMain.js
	 *
	 *  Purpose         : Gambler.
	 *
	 *  @description    : taking input from stake, goal and NoOfTrails and printing the percentage Of wins and losses  
	 *
	 *  @file           : couponMain.js
	 *  @overview       : win loss percentage of gambling game. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 13-02-2020
	 ******************************************************************************/
let readline = require('readline-sync');
let callFunction = require('./gamblerBL');
try{
var Stake = readline.question('Enter Stake amount : ');
var goal = readline.question('Enter your goal : ');
var Nooftrails = readline.question('Enter NoofTrails : ');
callFunction.gambling(Stake,goal,Nooftrails);
}
catch(error)
{
console.log(error);
}

