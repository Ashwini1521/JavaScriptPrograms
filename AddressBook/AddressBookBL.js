const read = require('readline-sync');
const fs = require('fs');

class Person {
    constructor(name, id, address, phoneNumber, city, pincode, state) {
        this.name = name;
        this.id = id;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.pincode = pincode;
        this.state = state;
    }
}

class AddressbookMethods extends Person {
    addEntry = () => {
        const name = read.question("enter name: ");
        const id = read.questionInt("enter id: ");
        const address = read.question("enter address: ");
        const phoneNumber = read.questionInt("enter phone Number: ");
        const city = read.question("enter city: ");
        const pincode = read.questionInt("enter pincode: ");
        const state = read.question("enter state: ");
        let person = new Person(name, id, address, phoneNumber, city, pincode, state);
        this.addressbook.person.push(JSON.parse(JSON.stringify(person)));
        fs.writeFileSync('addressbook.json', JSON.stringify(this.addressbook));

    }
    set deleteEntry(deleteId) {
        let isAvailable = true;
        for (let i = 0; i < this.addressbook.person.length; i++) {
            if (this.addressbook.person[i].id == deleteId) {

                this.addressbook.person.splice(i, 1);

                isAvailable = true;
                break;
            } else {
                isAvailable = false;
            }
        }
        let deleteMessage = isAvailable ? 'Record delete Successfully' : 'Record not found';
        console.log(deleteMessage);
        fs.writeFileSync('addressbook.json', JSON.stringify(this.addressbook));
    }
    editentry = () => {
        let editId = require.questionInt("enter id for the edit");
        let isAvailable = false;
        for (let i = 0; i < this.addressbook.person.length; i++) {
            if (this.addressbook.person[i].id == editId) {
                let editaddress = read.question("enter address for edit: ");
                let editcity = read.question("enter city for edit: ");
                let editpincode = read.questionInt("enter pincode for edit: ");
                let editphoneNumber = read.questionInt("enter phone number for edit: ");
                this.addressbook.person[i].address = editaddress;
                this.addressbook.person[i].city = editcity;
                this.addressbook.person[i].pincode = editpincode;
                this.addressbook.person[i].phoneNumber = editphoneNumber;
                isAvailable = true;
            }
            let editMessage = isAvailable ? 'Record edited Successfully' : 'Record not found';
            console.log(editMessage);
            fs.writeFileSync('addressbook.json', JSON.stringify(this.addressbook));
        }

    }
    get printEntries() {
        console.log(this.addressbook.person);
    }
    SortByName = () => {
        for (let i = 0; i < this.addressbook.person.length; i++) {
            for (let j = 0; j < this.addressbook.person.length - 1; j++) {
                if (this.addressbook.person[j].name > this.addressbook.person[j + 1].name) {
                    let temp = this.addressbook.person[j + 1];
                    this.addressbook.person[j + 1] = this.addressbook.person[j];
                    this.addressbook.person[j] = temp;
                }
            }
        }
        console.log("Data Sorted Successfully by name");
        fs.writeFileSync('addressbook.json', JSON.stringify(this.addressbook));
    }
    SortBypincode = () => {
        for (let i = 0; i < this.addressbook.person.length; i++) {
            for (let j = 0; j < this.addressbook.person.length - 1; j++) {
                if (this.addressbook.person[j].pincode > this.addressbook.person[j + 1].pincode) {
                    let temp = this.addressbook.person[j + 1];
                    this.addressbook.person[j + 1] = this.addressbook.person[j];
                    this.addressbook.person[j] = temp;
                }
            }
        }
        console.log("Data Sorted Successfully by pincode");
        fs.writeFileSync('addressbook.json', JSON.stringify(this.addressbook));
    }
}
class addressbook extends AddressbookMethods {
    constructor() {
        super()
        let data = fs.readFileSync('addressbook.json');
        this.addressbook = JSON.parse(data);
    }
}

module.exports = {
    addressbook
}