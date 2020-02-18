let readline = require('readline-sync');
let callFunction = require('./mergesortBL');
try {
    var arr = [12,4,3,15,10,9];
    console.log("arr");
    let result = callFunction.mergesort(arr, 0, arr.length-1);
    return result;
} catch (error) {
    console.log(error);
}