// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
{
  type: 'input',
  name: 'title',
  meassage: 'Enter the Title of you project:'
},
{
  type: 'input',
  name: 'description',
  meassage: 'Enter the the description of your project:'
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
  meassage: 'Enter the Installation Instructions of your project:'
},
{
  type: 'input',
  name: 'usage',
  meassage: 'Enter the Usage Information of your project:'
},
{
  type: 'input',
  name: 'credits',
  meassage: 'Enter Credits and Acknowledgments of your project:',
},
{
  type: 'list',
  name: 'licence',
  meassage: 'Enter the License Information of your project:',
  Choices: ['MIT', 'Apache 2.0', "GPU GPL v3", 'none']
},
{
  type: 'input',
  name: 'contributing',
  meassage: 'Enter the Constributing Guidelines of your project:'
},
{
  type: 'input',
  name: 'questions',
  meassage: 'Enter the FAQ and contact of your project:'
},

];
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(_filename, data) { 
    
    fs.writeToFile('README.md', data , (err) => {
        err ? console.error('Error writing README', err) 
        : console.log('README generated seccucessfully')
        
    })
};



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
        const markdown = generateMarkdown(answers);
        const filename = 'README.md';
        writeToFile(filename, markdown);
    })
        .catch((error) => {
            console.log("error occurred:", error);
        })
};

// Function call to initialize app
init();
  

