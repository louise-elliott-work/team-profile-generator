// * The Engineer class inherits from Employee.
const Employee = require("./Employee.js");

// * The Engineer class extends from the Employee class. In addition to Employee's properties and methods, Engineer will also have the following: github—GitHub username, getGithub() and getRole() is overridden to return 'Engineer'.

class Engineer extends Employee {
    constructor (github, getGitHub) {
        super(name, id, email, getName, getId, this.getEmail)
        this.github = github;
        this.getGitHub = getGitHub();
        this.getRole = "Engineer";
    }
}

// * Export Engineer.
module.exports = Engineer;