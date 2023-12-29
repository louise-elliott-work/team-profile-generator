// ! * requires -  check these
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");

// * file path for html creation in targeted folder
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// * use inquirer to gather information about the team members and create objects for each one using the correct classes as blueprints

// * array of objects for team members
const team = [];

// * render function to create HTML file once all user input has been captured, passing in an array containing all employee objects, and returning a block of HTML including templated divs for each employee
function render () {
    fs.appendFile(outputPath, render(team), (err) => err ? console.error(err) : console.log('HTML generated'))
    return;
};

// * function to add Engineer then choose next step
function addEngineer () {
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
    {
        name: 'nextStep',
        type: 'list',
        message: 'What do you want to do now?',
        choices: ['Add another engineer', 'Add an intern', 'Finish building the team']
    }
    ])
    .then((Engineer) => {
        const { name, id, email, github, nextStep} = Engineer;
        console.log(name, id, email, github, nextStep);
        team.push(Engineer);
        if (nextStep === "Add another engineer") {
            console.log("option to add an engineer selected");
            // * call function to add an engineer
            addEngineer();
        }
        else if (nextStep === "Add an intern") {
            console.log("option to add an intern selected");
            addIntern();
        }
        else if (nextStep === "Finish building the team") {
            // * prompt user with questions and log answers in a file named `team.html` in the `output` folder.
            // * When a user decides to finish building their team then they exit the application, and the HTML is generated. 
            // TODO Check render function is correct once other functions reviewed and tested  
            console.log("option to finish building the team selected");
            render();
            return;
        }
    })
};

// * function to add Intern then choose next step
function addIntern () {
    inquirer
        .prompt ([
        // * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
            //   * Intern’s name
            //   * ID
            //   * Email
            //   * School
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
            {
                name: 'nextStep',
                type: 'list',
                message: 'What do you want to do now?',
                choices: ['Add an engineer', 'Add another intern', 'Finish building the team']
            }
        ])
        .then((Intern) => {
            const { name, id, email, school, nextStep} = Intern;
            console.log(name, id, email, school, nextStep);
            team.push(Intern);
            if (nextStep === "Add an engineer") {
                console.log("option to add an engineer selected");
                // * call function to add an engineer
                addEngineer();
            }
            else if (nextStep === "Add another intern") {
                console.log("option to add an intern selected");
                addIntern();
            }
            else if (nextStep === "Finish building the team") {
                // * prompt user with questions and log answers in a file named `team.html` in the `output` folder.
                // * When a user decides to finish building their team then they exit the application, and the HTML is generated. 
                // TODO Check render function is correct once other functions reviewed and tested  
                console.log("option to finish building the team selected");
                render();
                return;
            }
        })
};

// * function to add Team Manager to start building a team
function addTeamManager () {
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
    .then((manager) => {
        const { name, id, email, officeNumber, nextStep } = manager;
        console.log(name, id, email, officeNumber, nextStep);
        team.push(manager);
        if (nextStep === "Add an engineer") {
            console.log("option to add an engineer selected");
            // * call function to add an engineer
            addEngineer();
        }
        else if (nextStep === "Add an intern") {
            console.log("option to add an intern selected");
            addIntern();
        }
        else if (nextStep === "Finish building the team") {
            // * prompt user with questions and log answers in a file named `team.html` in the `output` folder.
            // * When a user decides to finish building their team then they exit the application, and the HTML is generated. 
            console.log("option to finish building the team selected");
            render();
            return;
        }
});

};

// * call function to add Team Manager
addTeamManager();

// ! Notes:

// Create an HTML file using the HTML returned from the `render` function. 