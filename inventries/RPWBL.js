
const readLine = require('readline-sync');
const fs = require('fs');

class Rice{
    constructor(name,weight,price){
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    toString(){
        console.log(`${this.name} - ${this.weight} - ${this.price}`);
    }
}

class Pulses{
    constructor(name,weight,price){
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    toString(){
        console.log(`${this.name} - ${this.weight} - ${this.price}`);
    }
}

class Wheats{
    constructor(name,weight,price){
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    toString(){
        console.log(`${this.name} - ${this.weight} - ${this.price}`);
    }
}


module.exports = {
    ManageInventory
}