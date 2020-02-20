/******************************************************************************
	 *  Execution       :   1. default node         cmd> node quadraticMain.js
	 *                      2. if nodemon installed cmd> nodemon quadraticMain.js
	 *
	 *  Purpose         : to find the roots. 
	 *
	 *  @description    :  to find the roots using quadratic equation...
	 *
	 *  @file           : quadraticMain.js
	 *  @overview       : positive and negative roots using quadratic. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 20-02-2020
	 ******************************************************************************/
const readLine = require('readline-sync');
const quadraticBL = require('./quadraticBL');
try {
    let a = readLine.questionFloat('Enter The a :');
    let b = readLine.questionFloat('Enter The b :');
    let c = readLine.questionFloat('Enter The c :');
    quadraticBL.findQuadratic(a, b, c);
} catch (err) {
    throw err;
}