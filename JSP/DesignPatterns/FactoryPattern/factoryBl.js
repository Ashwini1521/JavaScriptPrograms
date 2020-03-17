class Professor {
    constructor(name) {
        this.name = name;
        this.type = "Professor";
    }

}
class Student {
    constructor(name) {
        this.name = name;
        this.type = "Student";
    }

}
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
module.exports = {
    collegefactory
}