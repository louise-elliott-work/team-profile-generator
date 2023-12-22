
// * The Employee parent class has the properties of name, id and email and the methods of getName, getId, getEmail and getRole, which returns 'Employee'.
class Employee {
    constructor (name, id, email, getName, getId, getEmail, getRole) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = getName();
        this.getID = getId();
        this.getEmail = getEmail();
        this.getRole = getRole(Employee);
    }
}

// * Export Employee as it is the parent class for other classes.
module.exports = Employee;