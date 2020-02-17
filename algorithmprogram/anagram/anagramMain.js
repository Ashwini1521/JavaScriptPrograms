let readline = require('readline-sync');
let callFunction = require('./anagramBL');
try {
    let String1 = readline.question('enter first string: ');
    let String2 = readline.question('enter second string: ');
    var res = callFunction.checkanagram(String1, String2);
    if (res) {
        console.log("The above Strings are anagram");
    }
    else {
        console.log("The above Strings are not anagram");
    }
} catch (error) {
    console.log(error);

}