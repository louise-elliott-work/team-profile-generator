// * requires
const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("../src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.


// * array of Team Manager prompts
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
];






inquirer
    .prompt(TMquestions)
    .then((response) => {
        const { TMname, TMid, TMemail, TMoffice } = response;
        console.log(response);
    })
    .then((nextStep = 
            {
                name: 'nextStep',
                type: 'list',
                message: 'What do you want to do now?',
                choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
            } 
        ) => {
        console.log(nextStep.value);
    }
    );


// * When a user enters those requirements then the user is presented with a menu with the option to:
    //   * Add an engineer
    //   * Add an intern 
    //   * Finish building the team






// // * prompt user with questions and log answers in a file named `team.html` in the `output` folder.
// inquirer
//     .prompt (nextStep)
//     .then((response) => {
//         const { TMname, TMid, TMemail, TMoffice } = response;
//             if (nextStep === "Add an engineer") {
//                 //! Engineer questions function
//                 EngineerQuestions();
//             }
//             else if (nextStep === "Add an intern") {
//                 //! Intern questions function
//                 InternQuestions();
//             }
//             else if (nextStep === "Finish building the team") {
//                 //! End process and create file   
//                 // * When a user decides to finish building their team then they exit the application, and the HTML is generated.   
//                 fs.writeFile('/output/team.html',
//                 (`
//                 ${TMname}
//                 ${TMid}
//                 ${TMemail}
//                 ${TMoffice}
//                 `),
//                 (err) => err ? console.error(err) : console.log('HTML file generated'))
//             }
//     });


// // * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
//     //   * Engineer's Name
//     //   * ID
//     //   * Email
//     //   * GitHub username
// const EngineerQuestions = [
//     {
//         name: 'EngineerName',
//         type: 'input',
//         message: 'What is the name of the engineer?',
//     },
//     {
//         name: 'EngineerID',
//         type: 'input',
//         message: 'What is their ID code?',
//     },
//     {
//         name: 'EngineerEmail',
//         type: 'input',
//         message: 'What is their email address?',
//     },
//     {
//         name: 'EngineerGitHub',
//         type: 'input',
//         message: 'What is their GitHub username?',
//     },
// ];


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

// // * Call the `render` function (provided for you) and pass in an array containing all employee objects; 
// // * The `render` function will generate and return a block of HTML including templated divs for each employee!
// // * Create an HTML file using the HTML returned from the `render` function. 

// // * You can use the provided variable `outputPath` to target this location.