/******************************************************************************
	 *  Execution       :   1. default node         cmd> node bankMain.js
	 *                      2. if nodemon installed cmd> nodemon bankMain.js
	 *
	 *  Purpose         : creating bankcash counter queue using dequeue. 
	 *
	 *  @description    : creating queue of bank cash counter using enqueue and dequeue method...
	 *
	 *  @file           : bankMain.js
	 *  @overview       : queue using enqueue and dequeue. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 20-02-2020
	 ******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./bankBL');
try {
    // let no = readline.question("Enter how many person are in encounter : ");
    var queue = new callfunction.Queue();

    queue.enqueue(10);
    queue.enqueue(20);
    queue.dequeue();
    queue.dequeue();
}
catch (error) {
    console.log(error);
}
