// ! use inquirer to gather information about the team members and create objects for each one using the correct classes as blueprints
// ! prompt user with questions and log answers in a file named `team.html` in the `output` folder.
// ! create an HTML file using the HTML returned from the `render` function.

// * requires
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const template = require("./src/page-template.js");

// * file path for html creation in targeted folder
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// TODO check how this works
const { nextTick } = require("process");

// * array of objects for team members
const teamArray = [];

// TODO render function to create HTML file once all user input has been captured, passing in an array containing all employee objects, and returning a block of HTML including templated divs for each employee
function render () {
    fs.appendFile(outputPath, team(template), (err) => err ? console.error(err) : console.log('HTML generated'))
}

// * function to add an engineer: when the user selects the **engineer** option, they are prompted to enter the name, ID, email and GitHub username of the engineer, then they are taken back to the menu.
function addEngineer () {
    inquirer
    .prompt ([
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
    .then ((engineer) => {
        new Engineer (engineer);
        teamArray.push(engineer);
        checkNextStep();
    });
};

// * function to add an intern: when the user selects the **intern** option, they are prompted to enter the name, ID, email and school of the intern, then they are taken back to the menu.
function addIntern () {
    inquirer
        .prompt ([
            {
                name: 'name',
                type: 'input',
                message: 'What is the name of the intern?',
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
                name: 'school',
                type: 'input',
                message: 'What is their school name?',
            },
        ])
        .then ((intern) => {
            new Intern (intern);
            teamArray.push(intern);
            checkNextStep();
        });
};

// * function to capture user choice for next step
function checkNextStep () {
    inquirer
    .prompt (
        {
            name: 'nextStep',
            type: 'list',
            message: 'What do you want to do now?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
        }
    )
    .then ((nextFunction) => {
        const { nextStep } = nextFunction;
        if (nextStep === "Add an engineer") {
            // * call function to add an engineer
            addEngineer();
        }
        else if (nextStep === "Add an intern") {
            // * call function to add an intern
            addIntern();
        }
        else if (nextStep === "Finish building the team") {
            // * call function to return a team array for HTML creation
            // TODO When a user decides to finish building their team then they exit the application, and the HTML is generated.
            console.log(teamArray);
            return teamArray;
        }
    })
};

// * function to start the team build by adding a **team manager**: when the user starts the application, they are prompted to enter the name, ID, email and office number of the team manager, then they are taken to the menu to choose their next step.
function startTeamBuild () {
    inquirer
    .prompt ([
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
    ])
    .then ((manager) => {
        new Manager (manager);
        teamArray.push(manager);
        checkNextStep();
    });
};

// * call function to start the team build by adding a Team Manager
startTeamBuild();