
const read = require('readline-sync');
const callfunction = require('./binarysearchBl');
const fs = require('fs');
try {
    let file = fs.readFileSync("binarysearch.txt", 'utf8');
    console.log(file);
    let string1 = read.question("Enter the string to search : ");
    let answer = callfunction.binarysearch(string1, file);
    console.log(answer);
}
catch (error) {
    console.log(error);
}

