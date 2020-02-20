/******************************************************************************
	 *  Execution       :   1. default node         cmd> node distanceMain.js
	 *                      2. if nodemon installed cmd> nodemon distanceMain.js
	 *
	 *  Purpose         : prints the Euclidean distance. 
	 *
	 *  @description    : to find and prints the Euclidean distance from the point to origin...
	 *
	 *  @file           : distanceMain.js
	 *  @overview       : distance between point to origin. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 20-02-2020
	 ******************************************************************************/
const distanceLib = require('./distanceBL');
try {
    var myArgs = process.argv.slice(2);
    console.log(myArgs[0]);
    let x2 = myArgs[0];
    let y2 = myArgs[1];
    console.log(`Distance From (0, 0) to (${x2}, ${y2}) is ${distanceLib.distance(x2, y2)}`);
} catch (err) {
    throw err;
}