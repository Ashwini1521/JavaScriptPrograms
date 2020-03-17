const read = require('readline-sync');
const callfunction = require('./InsertionSortBl');
try {
    let array = [];
    var size = read.questionInt("enter size of the array: ");
    for (let i = 0; i < size; i++) {
        array[i] = read.question("enter array elements: ");
    }
    let result = callfunction.InsertionSort(array);
    console.log(result);
} catch (error) {
    throw error;
}