// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown.js');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile('ReadMe.md', questions , (err) => {
        err ? console.error(err) : console.log(data)
    })
};
console.log()

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
