const lib = require('./2DBL');
try {
    // For Interger.
    let intArr = lib.readIntArr();
    lib.printIntArr(intArr);
    // For Float.
    let floatArr = lib.readFloatArr();
    lib.printFloatArr(floatArr);
    // For int.
    let boolArr = lib.readBoolArr();
    lib.printFloatArr(boolArr);
} catch (err) {
    console.log(err);
}