class Node {
    // constructor 
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Queue class 
class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    enqueue(value) {  //to enqueue the value into queue
        try {
            let node = new Node(value);
            if (this.head == null) {
                this.head = node;
            }
            else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.size++;
        }
        catch (err) {
            console.log(err);
        }
    }


    dequeue() { //top element in the queue
        try {
            let value;
            value = this.head.value;
            this.head = this.head.next;
            this.size--;
            return value;
        }
        catch (err) {
            console.log(err);
        }
    }

    isEmpty() {  //satck is empty or not
        return this.size == 0;
    }
}


getPrimeNum = () => { //prime number between 0-1000 in a array
    let primeNumbers = [];
    for (let i = 2; i < 1000; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}


isPrime = (number) => { //to check it is a prime number or not

    try {
        let i = 2;
        while (i <= number / 2) {
            if (number % i == 0)
                return false;
            i++
        }
        return true;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    //enqueue all the prime anagram number to the queue
    getAnagram: () => {
        try {
            let prime = getPrimeNum();
            let queue = new Queue();

            for (let i = 0; i < prime.length; i++) {
                let ele1 = (prime[i] + "").split("").sort().toString();
                for (let j = 0; j < prime.length; j++) {
                    let ele2 = (prime[j] + "").split("").sort().toString();
                    if (i != j && ele1 == ele2) {

                        queue.enqueue(prime[i]);

                        break;
                    }
                }
            }
            return queue;
        }
        catch (err) {
            console.log(err);
        }
    }
}
