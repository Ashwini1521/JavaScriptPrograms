const readLine = require('readline-sync');
let Regex = require('regex');
let row = 2;
let column = 2;

module.exports = {
     //Take Integer Value From User only.
    readIntArr:  () => {
        let arr = [[], []];
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                arr[i][j] = readLine.questionInt('Enter The Integer : ');
            }
        }
        return arr;
    },

     //Print Integer Array.
     // it take array as integer.
    printIntArr: (arr) => {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                process.stdout.write(arr[i][j] + ' ');
            }
            console.log();
        }
    },

    //Take Float Value From User only.
    readFloatArr: () => {
        let arr = [[], []];
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                arr[i][j] = readLine.questionFloat('Enter The Float Value : ');
            }
        }
        return arr;
    },

    //Print Integer Array.
    // it take array as Float Value.
    printFloatArr: (arr) => {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                process.stdout.write(arr[i][j] + ' ');
            }
            console.log();
        }
    },

    //Take Boolean Value From User only.
    readBoolArr: () => {
        let arr = [[], []];
        var regex = new Regex('(true|false)');
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                let ele = readLine.question(`Enter Boolean Value(true,false) ${i},${j}: `);
                arr[i][j] = ele;
                if (!regex.test(ele)) {
                    console.log('Enter Only True OR false.');
                    j--;
                }
            }
        }
        return arr;
    },
    //Print Integer Array.
    //it take array as Boolean value.
    printBoolArr: (arr) => {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                process.stdout.write(arr[i][j] + ' ');
            }
            console.log();
        }
    }
}