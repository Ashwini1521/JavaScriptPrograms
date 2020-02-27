const fs = require('fs');
const read = require('readline-sync');
const inventoryLib = require('./RPWBL');
try {
    let main = () => {
        let shop = new inventoryLib.ManageInventory();
        shop.calculateInventoryTotal();
    }
    main();
} catch (err) {
    throw err;
}