class subject {
    constructor() {
        this.observer = [];
    }
    subscribe(observer) {
        console.log(observer);
        this.observer.push(observer);
    }

    unsubscribe(observer) {
        let index = this.observer.indexOf(observer);
        if (index > -1) {
            this.observer.slice(index, 1);
        }
    }

    notifyAll() {
        for (let o of this.observer) {
            console.log(o, "has been notified");
        }
    }
}
module.exports = {
    subject
};