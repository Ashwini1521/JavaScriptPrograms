const readline = require('readline-sync');
/**
* @module stopwatch
*/
module.exports = {
    /**
    * @return {number} elapseTime - time between stopwatch start and stop
    */
    getElapseTime: () => {
        let startTime = start(); //calling start()
        let stopTime = stop(); //calling stop()
        let elapseTime = stopTime - startTime;
        return elapseTime;
    }
}
/**
* @return {number} startTime - time when stopwatch
*/
function start() {
    let startTime;
    let input;
    do {
        console.log("Press 1 to start the stop watch");
        input = readline.questionInt();
        if (input == 1) {
            console.log("Stop watch started");
            startTime = new Date().getTime(); //Return the number of milliseconds since 1970/01/01
        }
        else {
            console.log("Wrong input")
        }
    } while (input != 1);
    return startTime;
}
/**
* @return {number} stopTime - time when stopwatch
*/
function stop() {
    let input;
    let stopTime;
    do {
        console.log("Press 0 to stop the stop watch");
        input = readline.questionInt();
        if (input == 0) {
            console.log("Stop watch stopped");
            stopTime = new Date().getTime(); //Return the number of milliseconds since 1970/01/01
        }
        else {
            console.log("Wrong input")
        }
    } while (input != 0);
    return stopTime;
}