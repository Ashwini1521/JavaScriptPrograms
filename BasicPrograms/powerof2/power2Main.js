const readline = require('readline-sync');
const callfunction = require('./power2BL');
try {
    let number = readline.questionInt("Enter number :");
   let result= callfunction.power2(number);
   console.log(result);

} catch (error) {
    console.log(error);
}