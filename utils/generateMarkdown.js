// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    if (license === "MIT") {
      return `![MIT License](https://opensource.org/licence/MIT)`;
    } else if (license === "Apache 2.0") {
      return `![Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)`;
    } else if (license === "GNU") {
      return `![GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
    } 
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    This project is licensed under the ${license} license`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
## Description 
${data.description}
## Table of Contents
- [Description](#description)
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
## Contributing
${data.contribution}
## Contact Me
* Name - ${data.name}
* Email - [${data.email}](mailto:${data.email})
* Github - [${data.username}](https://github.com/${data.username}/)
## Testing
${data.test}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
