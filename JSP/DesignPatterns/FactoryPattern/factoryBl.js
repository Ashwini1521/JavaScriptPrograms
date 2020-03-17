/**
 * @class Professor
 */
class Professor {
    constructor(name) {
        this.name = name;
        this.type = "Professor";
    }

}
/**
 * @class Student
 */
class Student {
    constructor(name) {
        this.name = name;
        this.type = "Student";
    }

}
/**
 * @function collegefactory
 * @return - create a instance of Professor or Student and return it
 */
function collegefactory() {
    this.create = (name, type) => {
        switch (type) {
            case "Student": {
                return JSON.parse(JSON.stringify(new Student(name)));
            }
            case "Professor": {
                return JSON.parse(JSON.stringify(new Professor(name)));
            }
        }
    }
}
/**
 * @module factotyBl 
 */
module.exports = {
    collegefactory
}