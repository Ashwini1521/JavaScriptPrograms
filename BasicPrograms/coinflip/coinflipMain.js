const readline = require('readline-sync');
const callfunction = require('./coinflipBL');
try {
    let number = readline.questionInt("enter how many times you want to flip the coin : ");
    let result=callfunction.flip(number);
   
   console.log(result.headpercent);
   console.log(result.tailpercent);
} catch (error) {
    
}