const readline = require('readline-sync');
const callfunction = require('./leapBL');
try {
    let year = readline.questionInt("enter 4 digit year : ");
    callfunction.leapyear(year);
    // return result;
} catch (error) {
    console.log(error);
}