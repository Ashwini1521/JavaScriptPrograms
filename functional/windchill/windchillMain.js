/******************************************************************************
	 *  Execution       :   1. default node         cmd> node windchillMain.js
	 *                      2. if nodemon installed cmd> nodemon windchillMain.js
	 *
	 *  Purpose         : to find the temperature. 
	 *
	 *  @description    :  to find the windchill temperature and windchill speed using commandline argument...
	 *
	 *  @file           : windchillMain.js
	 *  @overview       : windchill temperature and speed. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 20-02-2020
	 ******************************************************************************/
const WindChildLib = require('./windchillBL');
try {
    let myArr = process.argv.slice(2);
    let t = myArr[0];
    let v = myArr[1];
    console.log(`Temperature = ${t}`);
    console.log(`Wind Speed = ${v}`);
    console.log(`Wind Chill = ${WindChildLib.findWindChill(t, v)}`);
} catch (err) {
    console.log(err);
}