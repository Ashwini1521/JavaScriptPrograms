const fs = require('fs');
const read = require('readline-sync');
/**
* @class Customer
*/
class Customer {
    constructor(name, password, stock) {
        this.name = name;
        this.password = password;
        this.stock = [];
    }

}
/**
* @class Stock
*/
class Stock {
    constructor(name, number, price) {
        this.name = name;
        this.number = number;
        this.price = price;
    }
}
/**
* @class CommercialManagement
*/
class CommercialManagement {
    constructor() {
        let JSONData = fs.readFileSync('commercial.json');
        this.CommercialManagement = JSON.parse(JSONData);

    }
    /**
    * It creates the account for commercialManagement. 
    */
    createAccount() {
        let custName = readLine.question('Enter Account Holder Name : ');
        let password = readLine.question('Enter The password : ');
        let stockName = readLine.question('Enter Stock Name : ');
        let number = readLine.questionInt('Enter Numbers Of Stock : ');
        let price = readLine.questionInt('Enter price of stock : ');
        let stockObj = new Stock(stockName, number, price);
        let Customer = new customer(custName, password, stockObj);
        this.CommercialManagement.customer.push(JSON.parse(JSON.stringify(Customer)));
        fs.writeFileSync('commercial.json', JSON.stringify(this.CommercialManagement));
    }
    /**
    * It checks whether the account is available or not. 
    */
    checkAccount(name, password) {
        let position = -1;
        for (let i in this.CommercialManagement.customer) {
            if (this.CommercialManagement.customer[i].name == name && this.CommercialManagement.customer[i].password == password) {
                position = i;
            }
        }
        return position;
    }
    /**
    * It will buystock and add  it into the json file. 
    */
    buystock(index) {
        console.log(`Welcome ${this.CommercialManagement.customer[index].name}`);
        let name = read.question('Enter the name of Stock : ');
        let number = read.questionInt('Enter Number of stock : ');
        let price = read.questionInt('Enter the price of Stock : ');
        let newStock = new Stock(name, number, price);
        this.CommercialManagement.customer[index].stock.push(JSON.parse(JSON.stringify(newStock)));
        fs.writeFileSync('commercial.json', JSON.stringify(this.CommercialManagement));
    }
    /**
    * It will sellstock and removes existing stock (after selling it) from json file. 
    */
    sellstock(index) {
        console.log('______Available Stocks______');
        for (let ind in this.CommercialManagement.customer[index].stock) {
            console.log(`${this.CommercialManagement.customer[index].stock[ind].name}`);
        }
        let nameStock = read.question('Enter name of the Stock for sell : ');
        for (let ind in this.CommercialManagement.customer[index].stock) {
            if (this.CommercialManagement.customer[index].stock[ind].name == nameStock) {
                this.CommercialManagement.customer[index].stock.splice(ind, 1);
            }
        }
        fs.writeFileSync('commercial.json', JSON.stringify(this.CommercialManagement));
    }
    /**
    * It will print the commercial.json file. 
    */
    printReport(index) {
        console.log(`Stock report of ${this.CommercialManagement.customer[index].name}`);
        for (let ind in this.CommercialManagement.customer[index].stock) {
            console.log(this.CommercialManagement.customer[index].stock[ind]);
        }
    }
}
/**
* @module commercialBL
*/
module.exports = {
    CommercialManagement
}