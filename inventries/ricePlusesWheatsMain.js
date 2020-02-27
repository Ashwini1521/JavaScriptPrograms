const fs = require('fs');
const inventoryLib = require('./ricePlusesWheatsBL');
try{
    let main = () => {
        let shop = new inventoryLib.ManageInventory();
        shop.calculateInventoryTotal();
    }
    main();
}catch(err){
    throw err;
}