// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');


// Asynchronous function to writeFile to the dist folder
const writeTODist = async (content) => {
  try {
    await writeFile('./dist/README.md', content);
  } catch (error) {
      console.log(error)
    }
};

//prompt inquirer.js in CLI
const promptInquirer  = async () => {
  console.log("Generate a README.md file. Input the following:");

  try {
    const data = await inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "Your Github username:",
        validate: (username) => {
          return username 
          ? true 
          : console.log("Please enter your Github username", false);
        },
      },
      {
        type: "input",
        name: "email",
        message: "Your email address:",
        validate: (email) => {
          return email 
          ? true 
          : console.log("Please enter your Email address", false);
        },
      },
      {
        type: "input",
        name: "title",
        message: "Title of your repositiory:",
        validate: (title) => {
          return title 
          ? true 
          : console.log("Please enter you project title", false);
        },
      },
      {
        type: "input",
        name: "description",
        message: "Description. Explain the purpose of the project:",
        validate: (des) => {
          return des 
          ? true 
          : console.log("Please describe your project", false);
        },
      },
      {
        type: "confirm",
        name: "installConfirm",
        message: "Does your project require any additonal installation?",
        default: false 
      },
      {
        type: "input",
        name: "install",
        message: "Define the additional insatallatio ns required:",
        when: ({ installConfirm }) => {
          return installConfirm ? true : false;
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Usage. How to use this repository:",
      },
      {
        type: "input",
        name: "contribute",
        message: "Contribution. How to contribute to this repository:",
      },
      {
        type: "input",
        name: "test",
        message: "Testing. Instructions on how to test:",
      },
      {
        type: "list",
        name: "license",
        message: "Choose one of the following licenses:",
        choices: ["MIT", "Apache", "GNU GPL v3"],
        validate: (license) => {
          return license
          ? true 
          : (console.log("Please choose a license"), false);
        },
      },
    ]);

  console.log(data);

  // Generate README.md file with the object returned "data"
  const readmeGenerated = generateMarkdown(data);
  writeTODist(readmeGenerated);

  console.log("README.md generated in dist folder!");

  } catch (error) { 
    console.log(error);
  }
};

promptInquirer();

