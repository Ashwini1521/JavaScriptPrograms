/******************************************************************************
	 *  Execution       :   1. default node         cmd> node paqueueMain.js
	 *                      2. if nodemon installed cmd> nodemon paqueueMain.js
	 *
	 *  Purpose         : to print prime anagram numbers in queue. 
	 *
	 *  @description    :to print prime numbers as well as anagram in given range and then  it has to store in queue ...
	 *
	 *  @file           : paqueueMain.js
	 *  @overview       : queue . 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 21-02-2020
	 ******************************************************************************/
const callfunction = require('./paqueueBL')
try {
    let queue = callfunction.getAnagram();
    while (!queue.isEmpty()) {
        console.log(queue.dequeue());
    }
}
catch (err) {
    console.log(err);
}