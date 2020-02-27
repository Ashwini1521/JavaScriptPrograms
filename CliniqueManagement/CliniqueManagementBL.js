const fs = require('fs');
/**
 * @class Doctor
*/
class Doctor{
    constructor(id,name,specialization,availability){
        this.id = id;
        this.name = name;
        this.specialization = specialization;
        this.availability = availability;
    }
}
/**
 * @class Patient
*/
class Patient{
    constructor(id,name,phone){
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
}
/**
 * @class CliniqueManagement
*/
class CliniqueManagement{
    constructor(){
        this.clinequeData = JSON.parse(fs.readFileSync('CliniqueManagement.json'));
    }
    /**
     * @module - this method will search the doctor there in clinique json file using search parameter.
     * @param {*} search - keyword to search for entries in json file. 
    */
    searchDoctor(search){
        // console.log(this.clinequeData.doctors.length);
        for (let i = 0; i < this.clinequeData.doctors.length; i++) {
            if (this.clinequeData.doctors[i].name == search) {
                console.log(this.clinequeData.doctors[i]);
            }
            if (this.clinequeData.doctors[i].id == search) {
                console.log(this.clinequeData.doctors[i]);
            }
            if (this.clinequeData.doctors[i].specialization == search) {
                console.log(this.clinequeData.doctors[i]);
            }
        }
    }
    /**
     * @module - this method will search the patients there in clinique json file using search parameter.
     * @param {*} search - keyword to search for entries in json file. 
     */
    searchPatient(search){
        for (let i = 0; i < this.clinequeData.patients.length; i++) {
            if (this.clinequeData.patients[i].name == search) {
                console.log(this.clinequeData.patients[i]);
            }
            if (this.clinequeData.patients[i].id == search) {
                console.log(this.clinequeData.patients[i]);
            }
            if (this.clinequeData.patients[i].phone == search) {
                console.log(this.clinequeData.patients[i]);
            }
        }
    }
}
module.exports = {
    CliniqueManagement
}