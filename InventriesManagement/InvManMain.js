const fs = require('fs');
const read = require('readline-sync');
const inventoryLib = require('./InvManBL');
try {

    let shop = new inventoryLib.ManageInventory();
    let a = true;
    while (a) {
        console.log('1 = For Add rice.');
        console.log('2 = For add pulse.');
        console.log('3 = For add wheat');
        console.log('4 = For calculate.');
        console.log('5 = For print Inventries');
        console.log('6 = For Exit.');

        let choice = read.questionInt('Enter Your Choice : ');
        switch (choice) {
            case 1:
                shop.fillRice();
                break;
            case 2:
                shop.fillWheats();
                break;
            case 3:
                shop.fillPulses();
                break;
            case 4:
                shop.calculateInventoryTotal();
                break;
            case 5:
                shop.inventoryObject();
                break;
            case 6:
                a = false;
                break;

        }
    }



} catch (err) {
    console.log(err);
}