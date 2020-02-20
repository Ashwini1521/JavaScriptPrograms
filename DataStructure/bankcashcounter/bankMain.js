const readline = require('readline-sync');
const callfunction = require('./bankBL');
try {
// let no = readline.question("Enter how many person are in encounter : ");
var queue = new callfunction.Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.dequeue();
queue.dequeue();
}
catch (error) {
console.log(error);
}
