const read = require('readline-sync');
const callfunction = require('./mergesortBl');
try {
    let array = [];
    var size = read.questionInt("enter size of the array: ");
    for (let i = 0; i < size; i++) {
        array[i] = read.question("enter array elements: ");
    }
    
    let Ms= callfunction.Sort(array);
    console.log(Ms);
} catch (error) {
    throw error;
}