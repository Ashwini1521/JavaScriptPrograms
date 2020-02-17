const readline = require('readline-sync');
const callfunction = require('./BalParBL');
try {
    let expression = readline.question("enter the Arthemetic expression")
    let result = callfunction.isBalanced(expression);
    console.log(result);
} catch (err) {
    throw err;
}