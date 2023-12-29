// * The Employee parent class has the properties of name, id and email and the methods of getName, getId, getEmail and getRole, which returns 'Employee'.
class Employee {
    constructor (name, id, email) {
        // * Although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
        // if (typeof name !== "string" || !name.trim().length) {
        //     throw new Error("Expected parameter 'name' to be a non-empty string");
        // }
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = function() {
            return name;
        };
        this.getId = function() {
            return id;
        };
        this.getEmail = function() {
            return email;
        };
        this.getRole = function() {
            return "Employee";
        };
    }
}

// * Export Employee as it is the parent class for other classes.
module.exports = Employee;