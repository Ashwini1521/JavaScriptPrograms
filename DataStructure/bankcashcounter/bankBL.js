const readline = require('readline-sync');
class Queue {
    constructor() {

        this.items = [];
        this.amount = 50000;
        this.count = 1;

    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {

        if (this.isEmpty())
            return "Underflow";
        else {
            var count = this.count++;
            this.banking(count);
            return this.items.shift();
        }

    }
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }
    isEmpty() {

        return this.items.length == 0;
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
    banking(count) {
        let option = readline.question("person " + count + ": enter 'w' for withdraw or 'd' for deposit : ");
        if (option == "w") {
            let useramount = readline.questionInt("Enter amount to withdraw = ");
            if (useramount >= this.amount) {
                console.log("Not enough money,Please enter " + this.amount + " below this...");
                this.banking(count);
            }
            else {
                // let useramount = readline.question("Enter amount to withdraw");
                this.amount = this.amount - useramount;
                console.log(useramount + " Successfully Withdrawed");
            }
        }
        else if (option == "d") {
            let depositamount = readline.questionInt("Enter amount to deposit = ");
            this.amount = parseInt(this.amount) + parseInt(depositamount);
            console.log(depositamount + " Successfully Deposit");
        }
        else {
            console.log("Enter either 'w' or 'd'");
            this.banking(count);
        }
    }

}

module.exports = {
    Queue

}