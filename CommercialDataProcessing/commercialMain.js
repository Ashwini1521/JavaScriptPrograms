/******************************************************************************
	 *  Execution       :   1. default node         cmd> node commercialMain.js
	 *                      2. if nodemon installed cmd> nodemon commercialMain.js
	 *
	 *  Purpose         : to create CommercialManagement.
	 *
	 *  @description    : to create CommercialManagement using oops concept...
	 *
	 *  @file           : commercialMain.js
	 *  @overview       : CommercialManagement. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 6.13.4
	 *  @since          : 20-03-2020
	 ******************************************************************************/
const read = require('readline-sync');
const fs = require('fs');
const callfunction = require('./commercialBl');
try {
    let CDP = new callfunction.CommercialManagement();
    let username = read.question('enter username : ');
    let password = read.question('enter password : ');
    let result = CDP.checkAccount(username, password);
    if (result != -1) {
        console.log('Successfully logged In!');
        CDP.printReport(result);
        let choice = 0;
        do {
            console.log('1 = Buy stock');
            console.log('2 = sell stock');
            console.log('3 = print stock');
            console.log('4 = Log Out');
            let choice = read.questionInt("enter your choice: ");
            switch (choice) {
                case 1:
                    CDP.buystock(result);
                    break;
                case 2:
                    CDP.sellstock(result);
                    break;
                case 3:
                    CDP.printReport(result);
                    break;
                case 4:
                    process.exit(0);
            }
        } while (choice != 4);
    } else {
        console.log('credential is wrong. Please try again!')
    }
} catch (error) {
    throw error;
}