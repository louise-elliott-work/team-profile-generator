// * requires
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const render = require("./src/page-template.js");

// * file path for html creation in targeted folder
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// * prompts
const manager =             
    {
        name: 'manager',
        message: 'You must start by entering the details of the team manager - please click enter',
    };
const name =             
    {
        name: 'name',
        type: 'input',
        message: 'Enter name',
    };
const id =
    {
        name: 'id',
        type: 'input',
        message: 'Enter ID code',
    };
const email = 
    {
        name: 'email',
        type: 'input',
        message: 'Enter email',
    };
const officeNumber =
    {
        name: 'officeNumber',
        type: 'input',
        message: 'Enter office number',
    };
const school = 
    {
        name: 'school',
        type: 'input',
        message: 'Enter school name',
    };
const github =
    {
        name: 'github',
        type: 'input',
        message: 'Enter GitHub username',
    };
const nextStep =
    {
        name: 'nextStep',
        type: 'list',
        message: 'What do you want to do now?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    };

// * call the render function, passing in the array of team members, for the html file to be generated in the output folder
function createHTMLfile () {
    fs.writeFileSync(outputPath, render(team), (err) => err ? console.error(err) : console.log('HTML generated'))
}

// * employee array to be populated from user input
const team = [];

// * function to add an engineer: when the user selects the **engineer** option, they are prompted to enter the name, ID, email and GitHub username of the engineer, then they are taken back to the menu.
function addEngineer () {
    inquirer
    .prompt ([
        name,
        id,
        email,
        github,
    ])
    .then ((answers) => {
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        checkNextStep();
    });
};

// * function to add an intern: when the user selects the **intern** option, they are prompted to enter the name, ID, email and school of the intern, then they are taken back to the menu.
function addIntern () {
    inquirer
        .prompt ([
            name,
            id,
            email,
            school
        ])
        .then ((answers) => {
            const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            checkNextStep();
        });
};

// * function to capture user choice for next step and call the relevant function 
function checkNextStep () {
    inquirer
    .prompt (nextStep)
    .then ((nextFunction) => {
        const { nextStep } = nextFunction;
        if (nextStep === "Add an engineer") {
            addEngineer();
        }
        else if (nextStep === "Add an intern") {
            addIntern();
        }
        else if (nextStep === "Finish building the team") {
            createHTMLfile();
        }
    })
};

// * function to start the team build by adding a **team manager**: when the user starts the application, they are prompted to enter the name, ID, email and office number of the team manager, then they are taken to the menu to choose their next step.
function startTeamBuild () {
    inquirer
    .prompt ([
        manager,
        name,
        id,
        email,
        officeNumber
    ])
    .then ((answers) => {
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        checkNextStep();
    });
};

// * call function to start the team build by adding a Team Manager
startTeamBuild();