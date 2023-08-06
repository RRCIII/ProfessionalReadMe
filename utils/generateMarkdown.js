// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let license = "MIT"
function renderLicenseBadge(license) {  
      const licenseBadges = {
        'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',  
      }
      return licenseBadges[license] || '';
    
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
      const licenseLinks = {
        'MIT': 'https://opensource.org/licenses/MIT'
      } 
    return licenseLinks[license] || '';
};



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
      const licenseSections = {
        'MIT': `MIT License
          This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.`
      }
    return licenseSections[license] || '';
};

console.log(renderLicenseBadge(license));
console.log(renderLicenseLink(license));
console.log(renderLicenseSection(license));

// TODO: Create a function to generate markdown for README
// const data = [
//   {title: "Title"},
//   {description: "Description"},
//   {tableOfContents: "Table of Contents"},
//   {installation: "Installation"},
//   {usage: "Usage"},
//   {credits: "Credits"},
//   {license: "License"},
//   {contributing: "Constributing"},
//   {tests:"Tests"},
//   {questions: "Questions"}
// ]

// function generateMarkdown(data) {
//   for(let prop of data) {
//     console.log(prop);
//     return `# ${data[0].title} 
//             ## ${data[1].description}
//             ## ${data[2].tableOfContents}
//             ## ${data[3].installation}
//             ## ${data[4].usage}
//             ## ${data[5].credits}
//             ## ${data[6].license}          
//             ## ${data[7].constributing}          
//             ## ${data[8].tests}          
//             ## ${data[9].questions}          
//           `;
//   }
// };

// generateMarkdown(...data);
// module.exports = generateMarkdown;



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

// Go the extra mile and write tests for your application. Then provide examples on how to run them here.