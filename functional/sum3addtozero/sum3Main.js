/******************************************************************************
	 *  Execution       :   1. default node         cmd> node sum3Main.js
	 *                      2. if nodemon installed cmd> nodemon sum3Main.js
	 *
	 *  Purpose         : to find the triplet sum = zero. 
	 *
	 *  @description    :  to read in N integers and counts the number of triples that sum to exactly 0.
 ...
	 *
	 *  @file           : sum3Main.js
	 *  @overview       : triplet sum is equals to zero. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 20-02-2020
	 ******************************************************************************/
const tripleZEROLib = require('./sum3BL');
try{
    let arr = [0, -1, 2, -3, 1];
    tripleZEROLib.findTriples(arr);
}catch(err){
    console.log(err);
}