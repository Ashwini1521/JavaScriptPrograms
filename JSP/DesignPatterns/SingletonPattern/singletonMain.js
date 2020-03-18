const callfunction = require('./singletonBl');
try {

    let obj1 = callfunction.getInstance();
    let obj2 = callfunction.getInstance();

    console.log(obj1 === obj2);
} catch (err) {
    console.log(err);
}