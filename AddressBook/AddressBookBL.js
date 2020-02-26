const fs = require('fs');
const readLine = require('readline-sync');

class person {
    constructor(id,fname,lname,address,city,state,zip,pnumber){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.pnumber = pnumber;
    }
}

class AddressBook{
    constructor(){
        let bookdata = fs.readFileSync('AddressBook.json');
        let jsonBookData = JSON.parse(bookdata);
        this.person = [];
        if(Array.isArray(jsonBookData.person)){
          this.entries = { person: jsonBookData.person  };
         }else{
          
            this.entries = { person: this.person  };
         }
    }
  
    addEntry(){  //it will insert the data in the json file by given ID.
        const id = readLine.questionInt('Enter the id : ');
        const fname = readLine.question('Enter FirstName : ');
        const lname = readLine.question('Enter LastName : ');
        const address = readLine.question(' Enter Address : ');
        const city = readLine.question(' Enter City : ');
        const state = readLine.question(' Enter State : ');
        const zip = readLine.questionInt(' Enter Pincode : ');
        const pnumber = readLine.questionInt(' Enter Phone Number : ');
        let p = new person(id,fname,lname,address,city,state,zip,pnumber);
        this.entries.person.push(JSON.parse(JSON.stringify(p))); // For remove object name during push data into array 
                                                                 // other wise it will consider object name as a key of that array.
        fs.writeFileSync('AddressBook.json',JSON.stringify(this.entries));
    } 
   
    deleteEntry(){ //it will Delete the data from the json file by given ID. 
        let deletID = readLine.questionInt('Enter The ID for delete : ');
        let isAvailable = true;
        for(let i=0;i<this.entries.person.length;i++){
            if(this.entries.person[i].id == deletID){
                this.entries.person.splice(i,1);
            }else{
                isAvailable = false;
            }
        }
        let deleteMessage = isAvailable?'Record Deleted Successfully.':'Record Not Founded.';
        console.log(deleteMessage);
        fs.writeFileSync('AddressBook.json',JSON.stringify(this.entries));
    }
  
    editEntry(){ //it will edit the data in the json file by given ID. 
        let editID = readLine.questionInt('Enter The Id for EDIT : ');
        let isAvailable = false;
        for(let i=0;i<this.entries.person.length;i++){
            if(this.entries.person[i].id === editID){
                let editAddress = readLine.question('Enter Address For Edit : ');
                let editCity = readLine.question('Enter City For Edit : ');
                let editPincode = readLine.questionInt('Enter Pincode For Edit : ');
                let editPhone = readLine.questionInt('Enter Phone Number For Edit : ');
                this.entries.person[i].address = editAddress;
                this.entries.person[i].city = editCity;
                this.entries.person[i].zip = editPincode;
                this.entries.person[i].pnumber = editPhone;
                isAvailable = true;
            }
        }
        let editMessage = isAvailable?'Record Edited Successfully.':'Record Not Founded for given id.';
        console.log(editMessage);
        fs.writeFileSync('AddressBook.json',JSON.stringify(this.entries));
    }
   
    sortByName(){ //it will sort the data by name and update JSON file. 
        for(let i=0;i<this.entries.person.length;i++){
            for(let j=0;j<this.entries.person.length - 1;j++){
                if(this.entries.person[j].fname > this.entries.person[j+1].fname){
                    let temp = this.entries.person[j+1];
                    this.entries.person[j+1] = this.entries.person[j];
                    this.entries.person[j] = temp;
                }
            }
        }
        // console.log(this.entries.person);
        console.log('Data sorted Successfully BY Name.');
        fs.writeFileSync('AddressBook.json',JSON.stringify(this.entries));
    }
    
    sortByZip(){  //it will sort the data by zip and update JSON file. 
        for(let i=0;i<this.entries.person.length;i++){
            for(let j=0;j<this.entries.person.length - 1;j++){
                if(this.entries.person[j].zip > this.entries.person[j+1].zip){
                    let temp = this.entries.person[j+1];
                    this.entries.person[j+1] = this.entries.person[j];
                    this.entries.person[j] = temp;
                }
            }
        }
        // console.log(this.entries.person);
        console.log('Data sorted Successfully BY Zip.');
        fs.writeFileSync('AddressBook.json',JSON.stringify(this.entries));
    }
  
    printBookData(){  //it will print the all data of AddressBook JSON file.
        console.log(this.entries.person);
    }
}
module.exports = {
    person,AddressBook
}