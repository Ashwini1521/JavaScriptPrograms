const readLine = require('readline-sync');
const quadraticBL = require('./quadraticBL');
try {
    let a = readLine.questionFloat('Enter The a :');
    let b = readLine.questionFloat('Enter The b :');
    let c = readLine.questionFloat('Enter The c :');
    quadraticBL.findQuadratic(a, b, c);
} catch (err) {
    throw err;
}