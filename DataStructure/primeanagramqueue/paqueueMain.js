const readline = require('readline-sync');
const callFunction = require('./paqueueBL');

try {
    const range = readline.question('enter the range of number ');
    let resultantAnagramNumbers = callFunction.primeNumbersGenerator(range);
    const q = new callFunction.Queue();
    for (let i = resultantAnagramNumbers.length - 1; i >= 0; i--) {
        q.enqueue(resultantAnagramNumbers[i]);
    }
    q.printQueue();
}
catch (err) {
    console.log(err);
}