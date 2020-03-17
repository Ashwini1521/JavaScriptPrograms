
const read = require('readline-sync');
const callfunction = require('./stockaccountBl');
try {
    let stockAccount = new callfunction.StockAccountManagement();
    while (true) {
        console.log('1 = for add new stock.');
        console.log('2 = for get stock report.');
        console.log('3 = Exit.');
        let choice = read.questionInt('enter your choice: ');
        switch (choice) {
            case 1:
                stockAccount.addStock();
                break;
            case 2:
                stockAccount.getStockReport();
                break;
            case 3:
                return;
        }
    }
} catch (error) {
    throw error;
}