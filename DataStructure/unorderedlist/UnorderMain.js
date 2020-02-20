/******************************************************************************
	 *  Execution       :   1. default node         cmd> node UnorderMain.js
	 *                      2. if nodemon installed cmd> nodemon UnorderMain.js
	 *
	 *  Purpose         : Unorderedlist using linkedlist. 
	 *
	 *  @description    : read the file and  add the unexisting element as well as 
     *                    delete the matching element from the file using linkedlist...
	 *
	 *  @file           : UnorderMain.js
	 *  @overview       : unordered linkedlist. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 20-02-2020
	 ******************************************************************************/
const readline = require('readline-sync');
const callFunction = require('./UnorderBL');
try {
    var ll = new callFunction.linkedlist();
    let element = readline.question("enter the string to check ");
    let text = callFunction.myfile();
    for (var i = 0; i < text.length; i++) {
        ll.add(text[i]);
    }
    let search = ll.search(element);
    console.log(search);
    console.log(ll.printlist());

    let r_file=ll.printlist();
    let res_file=callFunction.revertfile(r_file);
     console.log(res_file);


} catch (err) {
    throw err;
}