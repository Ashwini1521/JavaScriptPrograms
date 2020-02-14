const readline = require('readline-sync');
const callfunction = require('./factorBL');
try {
    let number = readline.questionInt("Enter number :");
   let result= callfunction.factor(number);
   console.log(result);

} catch (error) {
    console.log(error);
}