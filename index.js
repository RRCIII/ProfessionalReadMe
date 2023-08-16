//declaring Global packages require's
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
console.log("Welcome to your README generator");
console.log(
  "Answer the following questions to generate a high quality README for your project"
);

//array of questions to ask user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?:",
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log("Please enter a title to continue");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "description",
    message: "How would you describe your project?:",
    validate: (description) => {
      if (description) {
        return true;
      } else {
        console.log("Please enter your project description");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your project?:",
    validate: (installation) => {
      if (installation) {
        return true;
      } else {
        console.log("Please enter the steps of installation to continue");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this project?:",
    validate: (usage) => {
      if (usage) {
        return true;
      } else {
        console.log("Provide a usage of the project");
        return false;
      }
    }
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license that will best support your project:",
    choices: ['MIT', 'GNU', 'APACHE 2.0', 'none'],
    validate: (license) => {
      if (license) {
        return true;
      } else {
        console.log("Please enter license:");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "contribution",
    message: "How can users contribute to this project?:",
    validate: (constribution) => {
      if (constribution) {
        return true;
      } else {
        console.log("Provide information on how to contribute to the project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "How does the user test this project?:",
    validate: (test) => {
      if (test) {
        return true;
      } else {
        console.log("Explain how to test this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?:",
    validate: (github) => {
      if (github) {
        return true;
      } else {
        console.log("Please enter your github user");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?:",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        console.log("Please enter an email address");
        return false;
      }
    },
  },
];

//function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(filename, data, (err)=> {
    if (err) {
      return console.log(err)
    }
  });
  console.log("Successs! Checkout your README file");
}

//function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
    console.log(userInput)
    writeToFile("./dist/README.md", generateMarkdown(userInput))
  })
};

//call fxn to initialize app
init();
