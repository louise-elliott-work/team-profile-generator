// * requires
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.


// * array of user prompts
const TMquestions = [
    // * When a user starts the application then they are prompted to enter the **team manager**’s:
        //   * Name
        //   * Employee ID
        //   * Email address
        //   * Office number
    {
        name: 'TMname',
        type: 'input',
        message: 'What is the name of your team manager?',
    },
    {
        name: 'TMid',
        type: 'input',
        message: 'What is their ID code?',
    },
    {
        name: 'TMemail',
        type: 'input',
        message: 'What is their email address?',
    },
    {
        name: 'TMoffice',
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
        
        // TODO capture user choice in variable userChoice

        if (userChoice = 'Add an engineer') {
            // * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
                //   * Engineer's Name
                //   * ID
                //   * Email
                //   * GitHub username
            const EngineerQuestions = [
                {
                    name: 'EngineerName',
                    type: 'input',
                    message: 'What is the name of the engineer?',
                },
                {
                    name: 'EngineerID',
                    type: 'input',
                    message: 'What is their ID code?',
                },
                {
                    name: 'EngineerEmail',
                    type: 'input',
                    message: 'What is their email address?',
                },
                {
                    name: 'EngineerGitHub',
                    type: 'input',
                    message: 'What is their GitHub username?',
                },
            ];
        } else if (userChoice = 'Add an intern') {
            // * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
                //   * Intern’s name
                //   * ID
                //   * Email
                //   * School
            const InternQuestions = [
                {
                    name: 'InternName',
                    type: 'input',
                    message: 'What is the name of the intern?',
                },
                {
                    name: 'InternID',
                    type: 'input',
                    message: 'What is their ID code?',
                },
                {
                    name: 'InternEmail',
                    type: 'input',
                    message: 'What is their email address?',
                },
                {
                    name: 'InternSchool',
                    type: 'input',
                    message: 'What is their school name?',
                },
            ];
        }
        else if (userChoice = 'Finish building the team') {
            // * When a user decides to finish building their team then they exit the application, and the HTML is generated.
        }
    },
];

// * Call the `render` function (provided for you) and pass in an array containing all employee objects; 
// * The `render` function will generate and return a block of HTML including templated divs for each employee!
// * Create an HTML file using the HTML returned from the `render` function. 
// * Write it to a file named `team.html` in the `output` folder. 
// * You can use the provided variable `outputPath` to target this location.