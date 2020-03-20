/******************************************************************************
	 *  Execution       :   1. default node         cmd> node CliniqueManagementMain.js
	 *                      2. if nodemon installed cmd> nodemon CliniqueManagementMain.js
	 *
	 *  Purpose         : to create CliniqueManagement.
	 *
	 *  @description    : to create CliniqueManagement using oops concept...
	 *
	 *  @file           : CliniqueManagementMain.js
	 *  @overview       : CliniqueManagement. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 6.13.4
	 *  @since          : 20-03-2020
	 ******************************************************************************/
const CMPlib = require("./CliniqueManagementBL");
const readline = require('readline-sync');
try {
    let main = () => {
        let cliObj = new CMPlib.CliniqueManagement();
        let search = '';
        do {
            const choice = readline.questionInt(`Enter the choice to search \n******doctor****** \n doctor by \n 1. name \n 2. specialisation \n 3. Id \n ********Patient******* \n patients by \n 4. name \n 5. phone number \n 6. Id  \n 7. to exit  `);
            switch (choice) {
                case 1: search = readline.question('enter the name of doctor you want to search ');
                    cliObj.searchDoctor(search);
                    break;
                case 2: search = readline.question('enter the specialisation of doctor you want to search ');
                    cliObj.searchDoctor(search);
                    break;
                case 3: search = readline.questionInt('enter the id of doctor you want to search ');
                    cliObj.searchDoctor(search);
                    break;
                case 4: search = readline.question('enter the name of patient you want to search ');
                    cliObj.searchPatient(search);
                    break;
                case 5: search = readline.question('enter the phone number of patient you want to search ');
                    cliObj.searchPatient(search);
                    break;
                case 6: search = readline.question('enter the Id of patient you want to search ');
                    cliObj.searchPatient(search);
                    break;
                case 7: process.exit(0);

                default: console.log('enter valid input');
                    break;
            }
        } while (true);
    }
    main();
} catch (err) {
    throw err;
}