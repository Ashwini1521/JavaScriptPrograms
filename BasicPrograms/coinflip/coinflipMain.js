/******************************************************************************
	 *  Execution       :   1. default node         cmd> node coinflipMain.js
	 *                      2. if nodemon installed cmd> nodemon coinflipMain.js
	 *
	 *  Purpose         : to find the percentage of heads and tails. 
	 *
	 *  @description    :  fliping the coin and printing the percentage of Heads and Tails...
	 *
	 *  @file           : coinflipMain.js
	 *  @overview       : percentage of heads and tails. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 17-02-2020
	 ******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./coinflipBL');
try {
    let number = readline.questionInt("enter how many times you want to flip the coin : ");
    let result=callfunction.flip(number);
   
   console.log(result.headpercent);
   console.log(result.tailpercent);
   console.log(Math.random()*2+0);
} catch (error) {
    
}