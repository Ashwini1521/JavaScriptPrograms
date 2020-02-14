const readline = require('readline-sync');
const callfunction = require('./usernameBL');
try {
    let username = readline.question("Enter your name : ");
    let result = callfunction.checkusername(username);
} catch (error) {
    console.log(error);
}