/******************************************************************************
	 *  Execution       :   1. default node         cmd> node stockaccountMain.js
	 *                      2. if nodemon installed cmd> nodemon stockaccountMain.js
	 *
	 *  Purpose         : to create stockaccountManagement.
	 *
	 *  @description    : to create stockaccount using oops concept...
	 *
	 *  @file           : stockaccountMain.js
	 *  @overview       : stockaccountManagement. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 6.13.4
	 *  @since          : 20-03-2020
	 ******************************************************************************/
const read = require('readline-sync');
const callfunction = require('./stockaccountBl');
try {
    let stockAccount = new callfunction.StockAccountManagement();
    while (true) {
        console.log('1 = for add new stock.');
        console.log('2 = for get stock report.');
        console.log('3 = Exit.');
        let choice = read.questionInt('enter your choice: ');
        switch (choice) {
            case 1:
                stockAccount.addStock();
                break;
            case 2:
                stockAccount.getStockReport();
                break;
            case 3:
                return;
        }
    }
} catch (error) {
    throw error;
}