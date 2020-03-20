const read = require('readline-sync');
const callfunction = require('./AddressBookBL');
try {
    let addressbook = new callfunction.AddressbookMethods();
    while (true) {
        console.log('1: For Add entry');
        console.log('2: For Delete Entry');
        console.log('3: For edit entry');
        console.log('4: for print Entries');
        console.log('5: For sort by name');
        console.log('6: For Sort By pincode');
        console.log('7: For EXIT');
        let choice = read.questionInt('Enter Your choice: ');
        switch (choice) {
            case 1:
                addressbook.addEntry();
                break;
            case 2:
                let deleteId = read.questionInt('Enter The Id to delete : ');
                addressbook.deleteEntry = deleteId;
                break;
            case 3:
                addressbook.editentry();
                break;
            case 4:
                addressbook.printEntries;
                break;
            case 5:
                addressbook.SortByName();
                break;
            case 6:
                addressbook.SortBypincode();
                break;
            case 7:
                process.exit(0);
                break;
        }
    }
} catch (error) {
    throw error;
}