/******************************************************************************
    * Execution     : 1. default node cmd> node hashMain.js
    *                 2. if nodemon installed cmd> nodemon hashMain.js
    *
    * Purpose `     : To implement hash table to search a element efficiently;
    *
    * @description  : Create a Slot of 10 to store Chain of Numbers that belong to each Slot to
    *                 efficiently search a number from a given set of number.
    * @file         : hashMain.js
    * @overview     : Implement hash table to search a element efficiently.
    * @module       : readline-sync , fs
    * @author       : Ashwini M <ashwiniswamy1521@gmail.com>
    * @version      : v12.16.1
    * @since        : 21-02-2020
    ******************************************************************************/
const fileAction = require('fs');
const readline = require('readline-sync');
const callfunction = require('./hashBL');

try {
    let data = fileAction.readFileSync('/home/admin1/Desktop/javascript/DataStructure/hashfunction/hash.txt', 'utf-8');
    let dataList = data.split(" ");

    dataList[dataList.length - 1] = dataList[dataList.length - 1].replace(/[\n\r]+/, "");

    let hashTable = new callfunction.HashTable();
    for (let element of dataList) {
        element = parseInt(element);
        hashTable.addElement(element);
    }
    hashTable.getElements();
    let number = readline.questionInt('Enter a number that u want to search ');
    let result = hashTable.searchElement(number);
    if (result) {
        hashTable.removeElement(number);
    }
    else {
        hashTable.addElement(number);
    }
    hashTable.getElements();
}
catch (err) {
    console.log(err);
}