// * The Intern class inherits from Employee.
const Employee = require("./Employee.js");

// * The Intern class extends from the Employee class. In addition to Employee's properties and methods, Intern will also have the following: school, getSchool() and getRole() is overridden to return 'Intern'.
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.getSchool = function() {
            return school;
        };
        this.getRole = function() {
            return "Intern";
        };
    }
}

// * Export Intern.
module.exports = Intern;