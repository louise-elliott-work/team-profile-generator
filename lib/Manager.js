// * The Manager class inherits from Employee.
const Employee = require("./Employee.js");

// * The Manager class extends from the Employee class. In addition to Employee's properties and methods, Engineer will also have the following: officeNumber and getRole() is overridden to return 'Manager'.

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.getOfficeNumber = function() {
            return officeNumber;
        };
        this.getRole = function() {
            return "Manager";
        };
    }
}

// * Export Manager.
module.exports = Manager;