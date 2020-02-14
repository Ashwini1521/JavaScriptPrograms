const readline = require('readline-sync');
module.exports = {
    leapyear:(year) => {
        let len = year.toString().length;
        if(len != 4){
            console.log("Please enter 4 digit year");
            let year = readline.questionInt("enter the year");
            module.exports.leapyear(year);
        }
        else{
            if( (year % 4 ) == 0 || (year % 400 ) == 0  && (year % 100) != 0 ){
                console.log("leap year");
            }
            else{
                console.log("not a leap year");
            }
        }
    }
}