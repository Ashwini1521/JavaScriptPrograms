const read = require('readline-sync');
const callfunction = require('./anagramBl');
try {
    let string1 = read.question("enter first string: ");
    let string2 = read.question("enter second string: ");
    callfunction.anagram(string1, string2);
} catch (error) {
    throw error
}