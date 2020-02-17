const readline = require('readline-sync');
module.exports = {
    checkusername: (username) => {
        var len = username.length;
        if (len < 3) {
            console.log("Please enter minimum 3 character!");
            let username = readline.question("Enter your name : ");
            let result = module.exports.checkusername(username);
        }
        else {
            console.log("Hello " + username + ", How are you?");
        }
    }
}