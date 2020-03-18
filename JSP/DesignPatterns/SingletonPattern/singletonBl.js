
let instance;
/**
 * @class Singleton
 */
class Singleton {
    constructor() {
        console.log("I am a instance");
        instance = this;
    }

}
/**
 * @module getInstance 
 */
module.exports = {
    getInstance: () => {
        if (instance == null)
            instance = new Singleton();
        return instance;
    }
}