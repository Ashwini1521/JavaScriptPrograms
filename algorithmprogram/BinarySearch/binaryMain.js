let readline = require('readline-sync');
let callFunction = require('./binaryBL');
try {
    let array = [];
    let arraysize = readline.question("Enter size of an array : ");
    for (var i=0; i<arraysize; i++){
        array[i] = readline.question("array element is: ");
    }
    let String = readline.question("Enter String to check in array : ");
    let Binary = callFunction.Binary(array,String);
    console.log(Binary);
} catch (error) {
    console.log(error);
}