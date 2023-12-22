// TODO: Write code to define and export the Employee class

// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'


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