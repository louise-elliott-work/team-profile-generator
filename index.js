// * requires
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");

// * file path for html creation in targeted folder
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// TODO work out how to use this
const render = require("./src/page-template.js");

// * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.

inquirer
    .prompt ([
            // * When a user starts the application then they are prompted to enter the **team manager**’s:
        //   * Name
        //   * Employee ID
        //   * Email address
        //   * Office number
    {
        name: 'name',
        type: 'input',
        message: 'What is the name of your team manager?',
    },
    {
        name: 'id',
        type: 'input',
        message: 'What is their ID code?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email address?',
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'What is their office number?',
    },
    // * When a user enters those requirements then the user is presented with a menu with the option to:
    //   * Add an engineer
    //   * Add an intern 
    //   * Finish building the team
    {
        name: 'nextStep',
        type: 'list',
        message: 'What do you want to do now?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    }
    ])
    .then((Manager) => {
        const { name, id, email, officeNumber, nextStep } = Manager;
        console.log(Manager);
        if (nextStep === "Add an engineer") {
            console.log("option to add an engineer selected");
            inquirer
                .prompt ([
                // * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
                    //   * Engineer's Name
                    //   * ID
                    //   * Email
                    //   * GitHub username
                {
                    name: 'name',
                    type: 'input',
                    message: 'What is the name of the engineer?',
                },
                {
                    name: 'id',
                    type: 'input',
                    message: 'What is their ID code?',
                },
                {
                    name: 'email',
                    type: 'input',
                    message: 'What is their email address?',
                },
                {
                    name: 'github',
                    type: 'input',
                    message: 'What is their GitHub username?',
                },
            ])
            .then((Engineer) => {
                const { name, id, email, github } = Engineer;
                console.log(name, id, email, github);
            })
        }
        else if (nextStep === "Add an intern") {
            console.log("option to add an intern selected");
        }
        else if (nextStep === "Finish building the team") {
            // * prompt user with questions and log answers in a file named `team.html` in the `output` folder.
            // * When a user decides to finish building their team then they exit the application, and the HTML is generated.   
            fs.appendFile(outputPath,
            (`
                <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${name}</h2>

                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">Office number: ${officeNumber}</li>
                    </ul>
                </div>
            </div>
                `),
        (err) => err ? console.error(err) : console.log('HTML generated')
    )}
});





// // * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
//     //   * Intern’s name
//     //   * ID
//     //   * Email
//     //   * School
// const InternQuestions = [
//     {
//         name: 'InternName',
//         type: 'input',
//         message: 'What is the name of the intern?',
//     },
//     {
//         name: 'InternID',
//         type: 'input',
//         message: 'What is their ID code?',
//     },
//     {
//         name: 'InternEmail',
//         type: 'input',
//         message: 'What is their email address?',
//     },
//     {
//         name: 'InternSchool',
//         type: 'input',
//         message: 'What is their school name?',
//     },
// ];

// TODO:
// Call the `render` function (provided for you) and pass in an array containing all employee objects; 
// The `render` function will generate and return a block of HTML including templated divs for each employee!
// Create an HTML file using the HTML returned from the `render` function. 