const readline = require('readline-sync');
const callFunction = require('./harmonicBL');
try {
let harmonicnumber = readline.questionInt("enter number: ");
let result = callFunction.checkharmonic(harmonicnumber);
console.log(result);
}
catch (error) {
console.log(error);
}