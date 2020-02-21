let read = require('readline-sync');
const callFunction = require('./2DprimeBL');
try{
    let b = 100;
    let main = () => {
        callFunction.primeNumbers(1000);
        let res = callFunction.resultArr;
        // console.log(res);
        for(let a in res){
            console.log(`${b-100} to ${b} => ${res[a]}`);//backtic
            b = b + 100;
        };
    }
    main();
}catch(err){
    throw err;
}