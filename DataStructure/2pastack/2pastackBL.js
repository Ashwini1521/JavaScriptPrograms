class Node {
    // constructor 
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// stack class 
class Stack {
    constructor() {
        this.size = 0;
        this.head = null;
    }
    push(value){
        try {
            let node = new Node(value);
            if(this.head == null){
                this.head = node;
            }
            else{
                let current = this.head;
                while(current.next){
                    current = current.next;
                }
                current.next=node;
            }
            this.size ++;
        } catch (err) {
            console.log(err);
        }

    }
    pop(){
        try {
            let value;
            if (this.head.next == null) {
                value =this.head.value;
                this.head=null;
                
            } else {
                let current = this.head;
                let prev = current;
                while(current.next){
                    prev = current;
                    current= current.next;
                }
                value = current.value;
                prev.next = null;
                
            }
            this.size--;
            return value;
        } catch (err) {
            console.log(err);
        }

    }
    isEmpty() {  //stack is empty or not
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

    getAnagram:() => {
        try {
            let prime = getPrimeNum();
            let stack = new Stack();

            for (let i = 0; i < prime.length; i++) {
                let ele1 = (prime[i] + "").split("").sort().toString();
                for (let j = 0; j < prime.length; j++) {
                    let ele2 = (prime[j] + "").split("").sort().toString();
                    if (i != j && ele1 == ele2) {

                        stack.push(prime[i]);

                        break;
                    }
                }
            }
            return stack;
        }
        catch (err) {
            console.log(err);
        }
    }
}
