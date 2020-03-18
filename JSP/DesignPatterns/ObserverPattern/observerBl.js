/**
 * @class Subject
 */
class subject {
    constructor() {
        this.observer = [];
    }

    /**
     * @function subscribe 
     */
    subscribe(observer) {
        console.log(observer);
        this.observer.push(observer);
    }
    /**
     * @function unsubscribe 
     */
    unsubscribe(observer) {
        let index = this.observer.indexOf(observer);
        if (index > -1) {
            this.observer.slice(index, 1);
        }
    }
    /**
     * @function notifyAll 
     */
    notifyAll() {
        for (let o of this.observer) {
            console.log(o, "has been notified");
        }
    }
}
/**
 * @module subject 
 */
module.exports = {
    subject
};