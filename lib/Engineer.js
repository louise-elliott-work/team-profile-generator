// * The Engineer class inherits from Employee.
const Employee = require("./Employee.js");

// * The Engineer class extends from the Employee class. In addition to Employee's properties and methods, Engineer will also have the following: github—GitHub username, getGithub() and getRole() is overridden to return 'Engineer'.

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github;
        this.getGithub = function() {
            return github;
        };
        this.getRole = function() {
            return "Engineer";
        };
    }
}

// * Export Engineer.
module.exports = Engineer;