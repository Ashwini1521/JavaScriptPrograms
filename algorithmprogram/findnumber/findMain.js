const callFunction = require('./findBL');

function getNumber() {
    try {
        num = process.argv[2];
        let guessedNum = callFunction.getGuessedNumber(num); //calling getGuessedNumber()
        console.log("Your guessed number is: " + guessedNum);
    }
    catch (err) {
        console.log(err);
    }
}