// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
{
  type: 'input',
  name: 'title',
  meassage: 'Please enter your project name:'
},
{
  type: 'input',
  name: 'description',
  meassage: 'Please describe the purpose and functionality of your project:'
},
{
    type: 'checkbox',
    name: 'licence',
    meassage: 'Please enter a license applicable to your project:',
    Choices: ['MIT', 'Apache 2.0', "GPU GPL v3", 'Boost1.0', 'MPL2.0', 'BSD2','BSD3','none']
},
{
  type: 'input',
  name: 'table of contents',
  meassage: 'Enter the Table of Contents of you project:',
  Choices: 'none'
},
{
  type: 'input',
  name: 'installation',
  meassage: 'list any dependencies here:'
},
{
  type: 'input',
  name: 'usage',
  meassage: 'State the languages or technologies associated with this project:'
},
{
  type: 'input',
  name: 'credits',
  meassage: 'Enter Credits and Acknowledgments of your project:',
},
{
  type: 'input',
  name: 'contributors',
  meassage: 'Please list any contributors. (Use GitHub usernames)',
  default: ''
},
{
  type: 'input',
  name: 'email',
  meassage: 'Please enter your email address:'
},
{ type: 'input',
  name: 'creator',
  message: 'Write your Github username:'

},
{ type: 'input',
  name: 'name',
  message: 'State your full name:'

},
{ type: 'input',
  name: 'tests',
  message: 'Provide walkthrough of requires tests if applicable:' 
},
];


// TODO: Create a function to write README file
function writeToFile(filename, data) { 
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
};



// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile('README.md', generateMarkdown({...responses}));
    }).catch((error) => {
        console.log("error occurred:", error);
    })
};

// Function call to initialize app
init();
  

