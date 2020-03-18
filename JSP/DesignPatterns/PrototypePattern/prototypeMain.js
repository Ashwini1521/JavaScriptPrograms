/******************************************************************************
	 *  Execution       :   1. default node         cmd> node prototypeMain.js
	 *                      2. if nodemon installed cmd> nodemon prototypeMain.js
	 *
	 *  Purpose         : to design Prototype pattern. 
	 *
	 *  @description    :designed  prototype pattern ...
	 *
	 *  @file           : prototypeMain.js
	 *  @overview       : prototype pattern. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 18-03-2020
	 ******************************************************************************/
const callfunction = require('./prototypeBl')
try {

    callfunction.checkifprototype();

} catch (error) {
    throw error;
}