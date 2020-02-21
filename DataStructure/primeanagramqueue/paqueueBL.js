class Node {
    constructor(value,next=null) {
        this.value=value;
        this.next=next;
    }
}
class linkedlist {
    constructor(){
        this.head=null;
        this.size=0;
    }

Push(value) {
    this.head=new Node(value,this.head);
    this.size++;
}
Printlist(){
    let currentnode = this.head;
    while(currentnode){
        Console.log(currentnode.value);
        currentnode=currentnode.next;
    }
}

}



//let pnumbers = [];

primeNumbersGenerator = (n) => {
    pnumbers = checkPrimeNumber(n);
    
    let tempPNumbers = pnumbers.map((ele) => {
        return ele.toString();
    });
    let anagramArr = [];
    for (let i = 0; i < tempPNumbers.length; i++) {
        for (let j = i + 1; j < tempPNumbers.length; j++) {
            if (checkAnagram(tempPNumbers[i], tempPNumbers[j])) {
                anagramArr.push(tempPNumbers[i], tempPNumbers[j]);
            }
        }
    }
    return anagramArr;
},

checkPrimeNumber=(n) => {
    let arr = [];
    for (let i = 2; i < n; i++) {
        let count = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (!(count > 0))
            arr.push(i);
    }
    return arr;
},
checkAnagram = (number1, number2) => {
    if (number1.length == number2.length) {
        number1 = number1.split('').sort((a, b) => { return a - b }).join();
        number2 = number2.split('').sort((a, b) => { return a - b }).join();
        if (number1 == number2) {
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }

}

module.exports = {
    //Node, Queue, checkAnagram, checkPrimeNumber, primeNumbersGenerator
}
