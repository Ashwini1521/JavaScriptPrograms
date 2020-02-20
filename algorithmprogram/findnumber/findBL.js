const readline = require('readline-sync');

module.exports = {
    
    getGuessedNumber: (num) => {
        console.log("guess a number between " + 0 + " to " + (num - 1));
        let number = askQuestion(0, num - 1); //calling askQuestion()
        return number;
    }
}

function askQuestion(low, high) {     //lowest range, highest range
    let userAns;
    let mid = Math.floor((low + high) / 2);
    if (low != mid) {
        console.log("is your number present between: " + low + " and " + mid);
    }
    else {
        console.log("is your number is: " + low);
    }
    do {
        userAns = readline.questionInt("Press 1 for Yes, 0 for No ");
        if (userAns == 1 || userAns == 0) {
            break;
        }
        console.log("Wrong Input");
    } while (true);

    if (low != mid) {
        if (userAns == 1) {
            return askQuestion(low, mid); //calling askQuestion()
        }
        else {
            return askQuestion(mid + 1, high); //calling askQuestion()
        }
    }
    else {
        if (userAns == 1) {
            return low;
        }
        else {
            return high;
        }
    }
}