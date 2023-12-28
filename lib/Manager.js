// * The Manager class inherits from Employee.
const Employee = require("./Employee.js");

// * The Manager class extends from the Employee class. In addition to Employee's properties and methods, Engineer will also have the following: officeNumber and getRole() is overridden to return 'Manager'.

class Manager extends Employee {
    constructor (officeNumber) {
        super(name, id, email, getId, this.getEmail)
        this.officeNumber = officeNumber;
        this.getRole = "Manager";
    }
}

// * Export Manager.
module.exports = Manager;