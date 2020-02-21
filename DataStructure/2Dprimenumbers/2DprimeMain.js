const pr2aLib = require('./2DprimeBL');
try{
    let b = 100;
    let main = () => {
        pr2aLib.primeNumbers(1000);
        let res = pr2aLib.resultArr;
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