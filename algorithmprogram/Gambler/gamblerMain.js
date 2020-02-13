let readline = require('readline-sync');
let callFunction = require('./gamblerBL');
try{
var Stake = readline.question('Enter Stake amount : ');
var goal = readline.question('Enter your goal : ');
var Nooftrails = readline.question('Enter NoofTrails : ');
callFunction.gambling(Stake,goal,Nooftrails);
}
catch(error)
{
console.log(error);
}

