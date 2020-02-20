/******************************************************************************
	 *  Execution       :   1. default node         cmd> node palindromeMain.js
	 *                      2. if nodemon installed cmd> nodemon palindromeMain.js
	 *
	 *  Purpose         : to check palindrome. 
	 *
	 *  @description    :to check given user input is palindrome or not using dequeue...
	 *
	 *  @file           : palindromeMain.js
	 *  @overview       : palindrome. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 20-02-2020
	 ******************************************************************************/
let read = require('readline-sync');
let access = require('./palindromeBL')
let str = read.question("Enter the string :")
let length = str.length;
let deque = new access.Dequeue();
for (let i = length - 1; i >= 0; i--) {
    deque.addFirst(str.charAt(i));
}
//sdasdsad
let reverse = "";
for (let i = 0; i < length; i++) {
    let ch = deque.removeLast();
    reverse += ch;
}
if (str == reverse) {
    console.log("it is palindrome !!!");
}
else {
    console.log("it's not palindrome !!!");
}