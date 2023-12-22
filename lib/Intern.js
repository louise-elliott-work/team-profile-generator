// * The Intern class inherits from Employee.
const Employee = require("./Employee.js");

// * The Intern class extends from the Employee class. In addition to Employee's properties and methods, Engineer will also have the following: school, getSchool() and getRole() is overridden to return 'Intern'.

class Intern extends Employee {
    constructor (school, getSchool) {
        super(name, id, email, getName, getId, this.getEmail)
        this.school = school;
        this.getSchool = getSchool();
        this.getRole = "Intern";
    }
}

// * Export Intern.
module.exports = Intern;