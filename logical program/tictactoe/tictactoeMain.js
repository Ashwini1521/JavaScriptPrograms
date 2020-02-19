let readline = require('readline-sync');
let callFunction = require('./tictactoeBL');
try {
    tictactoe = new callFunction.TTT(); //calling TTT() just the class and not the function yet to start with the game. tictactoe.hostplay(); //calling hostplay() function from the TTT() class to start with the game.
    tictactoe.hostplay();
}
catch (err) {
    console.log(err);
} 