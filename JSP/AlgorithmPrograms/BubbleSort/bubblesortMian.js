const read = require('readline-sync');
const callfunction = require('./bubblesortBl');
try {
    let array = [];
    var size = read.questionInt("enter size of the array: ");
    for (let i = 0; i < size; i++) {
        array[i] = read.question("enter array elements: ");
    }
    let result = callfunction.BubbleSort(array);
    console.log(result);
} catch (error) {
    throw error;
}