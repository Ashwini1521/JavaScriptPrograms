const readline = require('readline-sync');
var Students = function (size) {
    this.array = [];
    this.size = size;
}
/**
 * @function Students
 */
Students.prototype.getName = function () {
    return this.array;
}
/**
 * @function reqarray
 */
var reqarray = function () {
    for (let i = 0; i < this.size; i++) {
        this.array[i] = readline.question("enter Students names : ");
    }
}
/**
 * @function checkifprototype
 */
var checkifprototype = function () {
    var array = [];
    var Student = new Students(4);
    reqarray.prototype = Student;
    var reqarrays = new reqarray();
    array = reqarrays.getName();

    array.push("Akshay");
    console.log(array);

}
/**
 * @module checkifprototype 
 */
module.exports = {
    checkifprototype
}