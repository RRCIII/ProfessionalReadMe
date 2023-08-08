// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let license = ''

function renderLicenseBadge(license) {
  if(license !== 'none') {
    return '![License: MIT](https://img.shields.io/badge/License-yellow.svg)';
  } else if (license === 'Apache 2.0') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if ( license === 'GNU GPL v3') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else {
    return ''; // If there is no license entered by user 
  }
};



// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'none') {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === "Apache 2.0") {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === "GNU GPL v3") {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  } 
};

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License 
This Project is licensed under the ${license} license`;
  } else {
    return '';
  }
};


// TODO: Create a function to generate markdown for README
const data = [{
  title: "Title",
  name: "Name",
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
  by ${data.name}
  ${renderLicenseBadge(data.license)};
  
  ## Description
  ## ${data.description}
  
  ##Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation
## ${data.installation}
## Usage
## ${data.usage}
## Credits
## ${data.credits}

## ${data.license}

## Questions
## ${data.questions}
Name - ${data.name}
Email - ${data.email}
Github - [${data.creator}] (https://github.com/${data.creator}/)

## Contributors
## ${data.contributing}

## Tests
## ${data.tests}

${renderLicenseSection(license)}
  `;
};

generateMarkdown(data);   

module.exports = generateMarkdown;
