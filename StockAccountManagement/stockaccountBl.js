const fs = require('fs');
const read = require('readline-sync');
/**
* @module Stock
*/
class Stock {
    constructor(name, NoOfstock, price) {
        this.name = name;
        this.NoOfstock = NoOfstock;
        this.price = price;
    }

}
/**
* @class StockAccountManagement
*/
class StockAccountManagement {
    constructor() {
        let jsondata = fs.readFileSync('stockaccount.json');
        this.stockData = JSON.parse(jsondata);
    }
    /**
    * It adds stock to the json file. 
    */
    addStock() {
        try {
            let name = read.question('enter the name of the stock: ');
            let NoOfstock = read.questionInt('enter the no of stock : ');
            let price = read.questionInt('enter the price of the stock : ');
            let Stock = new stock(name, NoOfstock, price);
            this.stockData.stock.push(JSON.parse(JSON.stringify(Stock)));
            fs.writeFileSync('stockaccount.json', JSON.stringify(this.stockData));
        }
        catch (error) {
            throw error;
        }

    }
    /**
    * It will prints the stockaccount.json file. 
    */
    getStockReport() {
        try {
            
            for (let i in this.stockData.stock) {
                let TotalPrice = this.stockData.stock[i].price * this.stockData.stock[i].NoOfstock;
                console.log(`total price of ${this.stockData.stock[i].name} is ${TotalPrice}`)
            }
        }
        catch (error) {
            throw error;
        }
    }
}
/**
* @module StockAccountManagement
*/
module.exports = {
    StockAccountManagement
}