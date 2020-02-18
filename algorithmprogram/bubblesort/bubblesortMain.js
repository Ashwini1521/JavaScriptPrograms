let readline = require('readline-sync');
let callFunction = require('./bubblesortBL');
try {
    let size = readline.question('enter size ');
    let a = [];
    for (let j = 0; j < size; j++) {
        a[j] = readline.question("enter elements ");
    }
    let bub = callFunction.bubblesort(a); //calling bubblesort()
    console.log(bub);
}
catch (err) {
    console.log(err);
}