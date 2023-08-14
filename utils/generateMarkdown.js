// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none') {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellow.svg)`;
  }
    return '';
};



// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'none') {
    return `\n* ([License]#licenses)\n`;
  } 
    return ''; 
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

function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)};
  
  ## Description
  ## ${data.description}
  
  Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
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
Name : /n${data.name}n/
Email : /n${data.email}n/
Github : /n[${data.creator}] (https://github.com/${data.creator}/)n/

## Contributors
## ${data.contributors}

## Tests
## ${data.tests}

${renderLicenseSection(data.license)}
  `;
};



module.exports = generateMarkdown;
