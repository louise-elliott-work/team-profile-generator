# Team profile generator
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
## Contents
[Description](#description)<br>
[Installation](#installation)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Contributions](#contributions)<br>
[Testing](#testing)<br>
## Description
This is a command-line application that generates a profile of software development team members based on user input. The user input is gathered using Inquirer and objects are created for each team member using the relevant classes.
## Installation
Run the following command in order to install dependencies: npm i
## Usage
In order to initiate the process, the user must type into the command line 'node index.js' then answer the prompts. When a user starts the application, they are prompted to enter the team manager's name, id, email and office number. Once that has been done, the user is presented with a menu with options to: add an engineer, add an intern or finish building the team. When a user selects the engineer option, they are prompted to enter the following and then taken back to the menu: name, id, email and GitHub username. When a user selects the intern option, they are prompted to enter the following and then taken back to the menu: name, id, email and school. When the user chooses to finish building the team, they exit the application and the HTML is generated in a folder called 'output'. An example and a screenshot are provided here:
[Example team.html file](output/example-team.html)
![Example screenshot](output/example-screenshot.png)
## License
2024 Louise Elliott
MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
## Contributions
This has been designed to be user-friendly and intuitive - if there are any ideas for improvements and future collaborations, do get in touch.
## Testing
Run the following command in order to test: npm run test
## Questions
To view the repo relating to this tool, visit https://github.com/louise-elliott-work.
For any questions relating to this tool, contact louise.elliott.work@gmail.com.
