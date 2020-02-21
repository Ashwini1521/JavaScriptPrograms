/******************************************************************************
	 *  Execution       :   1. default node         cmd> node 2DprimeMain.js
	 *                      2. if nodemon installed cmd> nodemon 2DprimeMain.js
	 *
	 *  Purpose         : prime number in 2DArray.. 
	 *
	 *  @description    :to print prime numbers in 2Darray...
	 *
	 *  @file           : 2DprimeMain.js
	 *  @overview       : prime number in 2DArray. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 21-02-2020
	 ******************************************************************************/
let read = require('readline-sync');
const callFunction = require('./2DprimeBL');
try{
    let b = 100;
    let main = () => {
        callFunction.primeNumbers(1000);
        let res = callFunction.resultArr;
        // console.log(res);
        for(let a in res){
            console.log(`${b-100} to ${b} => ${res[a]}`);//backtic
            b = b + 100;
        };
    }
    main();
}catch(err){
    throw err;
}