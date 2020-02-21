const readline = require('readline-sync');
const callFunction = require('./2dpanagramBL');

try {
    const range = readline.question('enter the range of number ');
    let result= callFunction.primeNumbersGenerator(range);
    console.table(result);
}
catch (err) {
    console.log(err);
}