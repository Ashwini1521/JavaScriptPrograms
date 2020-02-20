// const readline = require('readline-sync');
// const callFunction = require('./orderedBL');
// try {
//     let data = FileRead.readFileSync('/home/admin1/Desktop/javascript/DataStructure/ordered.txt','utf-8');
//     //let =data.split(" ");
// let linkedlist = callFunction.linkedlist();

// for (let e in linkedlist) {
//     linkedlist.add(e);
//  }
//  let nn=readline.question("Enter the new number");
 
// } catch (err) {
//     throw err;
// }

const readline = require('readline-sync');
const callFunction = require('./orderedBL');
try {
    var ll = new callFunction.linkedlist();
    let element = readline.question("enter the string to check ");
    let text = callFunction.myfile();
    for (var i = 0; i < text.length; i++) {
        ll.add(text[i]);
    }
    let search = ll.search(element);
    console.log(search);
    console.log(ll.printlist());

    let r_file=ll.printlist();
    let res_file=callFunction.revertfile(r_file);
     console.log(res_file);


} catch (err) {
    throw err;
}