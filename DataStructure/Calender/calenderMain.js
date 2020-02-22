const readline = require('readline-sync');
const callfunction = require('./calenderBL');
try {

   // let month = readline.questionInt("enter the month : ");
    //let year = readline.questionInt("enter the year : ");
    var ans = callfunction.calendar(process.argv[2], process.argv[3]);
}
catch (error) {
    console.log(error);
}