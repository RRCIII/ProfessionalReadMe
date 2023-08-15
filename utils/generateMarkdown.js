const confirm = require("./confirm");

//generate README.md file w/ JS
const generateMarkdown = (data) => {
  return `# ${data.title} •  ${condtion.createBadge(data.license)};
  
  
## Description
${data.description}
  
## Table of Contents
${confirm.confirmstall(date.install)}
${confirm.confirmUsage(date.usage)}
${confirm.confirmContribute(date.constribute)}
${confirm.confirmTesting(date.test)}
*[License](#license)
*[Questions](#questions)


${confrim.createInstall(data.Install)}

${confrim.createInstall(data.Usage)}

${confrim.createInstall(data.contribute)}

${confrim.createInstall(data.test)}

## License
This application is covered under the ${data.license}

## Questions
Check out my Github page: [${data.username}](https://www.github.com/${
    data.username
  })

Conact me at: [${data.email}](mailto:${data.email})`;
};

module.exports = generateMarkdown;
