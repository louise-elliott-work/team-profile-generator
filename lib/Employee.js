// * The Employee parent class has the properties of name, id and email and the methods of getName, getId, getEmail and getRole, which returns 'Employee'.
class Employee {
    constructor (name, id, email) {
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