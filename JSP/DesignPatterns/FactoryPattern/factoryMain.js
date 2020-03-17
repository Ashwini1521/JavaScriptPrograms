/******************************************************************************
	 *  Execution       :   1. default node         cmd> node factoryMain.js
	 *                      2. if nodemon installed cmd> nodemon factoryMain.js
	 *
	 *  Purpose         : to design factory. 
	 *
	 *  @description    :designed  college factory with name and type ...
	 *
	 *  @file           : factoryMain.js
	 *  @overview       : factory design. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : v12.16.1
	 *  @since          : 17-03-2020
	 ******************************************************************************/
const callfunction = require('./factoryBl');
try {
    let clgfactory = new callfunction.collegefactory();
    let college = [];
    college.push(clgfactory.create("RahulGowda", "Professor"));
    college.push(clgfactory.create("Navya", "Professor"));
    college.push(clgfactory.create("Ashwini", "Student"));
    college.push(clgfactory.create("Mamta", "Student"));

    for (let clg in college) {
        console.log(`Hi I am ${college[clg].name} And I am a ${college[clg].type}`);
    }

} catch (error) {
    throw error;
}