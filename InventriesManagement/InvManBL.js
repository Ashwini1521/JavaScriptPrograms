const readLine = require('readline-sync');
const fs = require('fs');
/**
 * @class Rice
*/
class Rice {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    toString() {
        console.log(`${this.name} - ${this.weight} - ${this.price}`);
    }
}
/**
 * @class Pulses
*/
class Pulses {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    toString() {
        console.log(`${this.name} - ${this.weight} - ${this.price}`);
    }
}
/**
 * @class Wheats
*/
class Wheats {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    toString() {
        console.log(`${this.name} - ${this.weight} - ${this.price}`);
    }
}
/**
 * @class ManageInventory
*/
class ManageInventory {
    constructor() {
        this.rice = [];
        this.pulses = [];
        this.wheats = [];
        let jsonData = fs.readFileSync('InvMan.json');
        let inventoryData = JSON.parse(jsonData);
        this.inventories = {};
        //it check array is there or not in object.
        if (Array.isArray(inventoryData.rice)) {
            this.inventories.rice = inventoryData.rice;
        } else {
            // Object.assign(newObject,oldObject) it append new-Object to old-object. 
            this.inventories = Object.assign({ rice: [] }, this.inventories)
        }
        if (Array.isArray(inventoryData.pulses)) {
            this.inventories.pulses = inventoryData.pulses;
        } else {
            this.inventories = Object.assign({ pulses: [] }, this.inventories)
        }
        if (Array.isArray(inventoryData.wheats)) {
            this.inventories.wheats = inventoryData.wheats;
        } else {
            this.inventories = Object.assign({ wheats: [] }, this.inventories)
        }
    }
    /**
     * @module-it will insert the RiceData in the Inventory.json file. 
    */
    fillRice() {
        const name = readLine.question('Enter the Rice Name : ');
        const weight = readLine.questionFloat('Enter the weight of Rice : ');
        const price = readLine.questionFloat('Enter the price of Rice : ');
        const rice = new Rice(name, weight, price);
        this.inventories.rice.push(JSON.parse(JSON.stringify(rice)));
        fs.writeFileSync('InvMan.json', JSON.stringify(this.inventories));
    }
    /**
     * @module-it will insert the PulsesData in the Inventory.json file. 
    */
    fillPulses() {
        const name = readLine.question('Enter the Name of pulses : ');
        const weight = readLine.questionFloat('Enter the weight of pulses : ');
        const price = readLine.questionFloat('Enter the price of pulses : ');
        const pulses = new Pulses(name, weight, price);
        this.inventories.pulses.push(JSON.parse(JSON.stringify(pulses)));
        fs.writeFileSync('InvMan.json', JSON.stringify(this.inventories));
    }
    /**
     * @module-it will insert the WheateData in the Inventory.json file. 
    */
    fillWheats() {
        const name = readLine.question('Enter the name of wheat : ');
        const weight = readLine.questionFloat('Enter the weight of wheat :');
        const price = readLine.questionFloat('Enter the price of wheat : ');
        const wheat = new Wheats(name, weight, price);
        this.inventories.wheats.push(JSON.parse(JSON.stringify(wheat)));
        fs.writeFileSync('InvMan.json', JSON.stringify(this.inventories));
    }
    /**
     * @module-it will calculate and print each inventories price. 
    */
    calculateInventoryTotal() {
        let riceTotal = 0;
        let plusesTotal = 0;
        let wheatsTotal = 0;
        for (let i = 0; i < this.inventories.rice.length; i++) {
            riceTotal += this.inventories.rice[i].price;
        }
        for (let i = 0; i < this.inventories.pulses.length; i++) {
            plusesTotal += this.inventories.pulses[i].price;
        }
        for (let i = 0; i < this.inventories.wheats.length; i++) {
            wheatsTotal += this.inventories.wheats[i].price;
        }
        console.log(`Total price of Rice = ${riceTotal}`);
        console.log(`Total price of Pluses = ${plusesTotal}`);
        console.log(`Total price of Wheats = ${wheatsTotal}`);
    }
    inventoryObject() {
        console.log('-------RICE OBJECT---------');
        console.log(this.inventories.rice);
        console.log('-------PLUSES OBJECT-------');
        console.log(this.inventories.pulses);
        console.log('-------WHEATS OBJECT-------');
        console.log(this.inventories.wheats);
    }
}
module.exports = {
    ManageInventory
}