const read = require('readline-sync');
const callfunction = require('./primeBl');
try {
    let min = read.questionInt("enter minimum range: ");
    let max = read.questionInt("enter maximum range: ");
    let result = callfunction.Primes(min, max);
    console.log(result);
} catch (error) {
    throw error
}