/******************************************************************************
	 *  Execution       :   1. default node         cmd> node observerMain.js
	 *                      2. if nodemon installed cmd> nodemon observerMain.js
	 *
	 *  Purpose         : to design observer pattern. 
	 *
	 *  @description    :designed observer pattern ...
	 *
	 *  @file           : observerMain.js
	 *  @overview       : observer design. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 18-03-2020
	 ******************************************************************************/
const callfunction = require("./observerBl");
try {
    let main = () => {
        let observer = new callfunction.subject();
        observer.subscribe("observer 1");
        observer.subscribe("observer 2");
        observer.notifyAll("observer 2");
    };
    main();
} catch (error) {
    throw error;
}