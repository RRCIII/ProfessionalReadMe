// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache 2.0') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if ( license === 'GNU GPL v3') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else {
    return ''; // If there is no license entered by user 
  }
};
//  console.log(renderLicenseBadge(license))


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT") {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === "Apache 2.0") {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === "GNU GPL v3") {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  } 
};
// console.log(renderLicenseLink(license));


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license) {
    return `## License 
This Project is licensed under the ${license} License. Click [here]${renderLicenseLink(license)} to see the full license details.

${renderLicenseBadge(license)}
`;
  } else {
    return '';
  }
};
// console.log(renderLicenseSection(license));

// TODO: Create a function to generate markdown for README
const data = [{
  title: "Title",
  description: "Description",
  tableOfContents: "Table of Contents",
  installation: "Installation Istructions",
  usage: "Usage Information",
  credits: "Credits and Acknowledgments",
  license: "License Information",
  contributing: "Constributing GUidelines",
  tests:"Tests Instructions",
  questions: "FAQ and contact"
}];


function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}
  

  ## Table of Constents
  ${data.tableOfContents}

- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits 
${data.credits}

## License 
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

  `;
};

console.log(generateMarkdown(data));   

module.exports = generateMarkdown;



// Markdown template 
// # <Your-Project-Title>

// ## Description

// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?

// ## Table of Contents (Optional)

// If your README is long, add a table of contents to make it easy for users to find what they need.

// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// ## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// ## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License

// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// ---

// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Features

// If your project has a lot of features, list them here.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests

// Go the extra mile and write tests for your application. Then provide examples on how to run them here