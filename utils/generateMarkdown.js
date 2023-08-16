const confirm = require("./confirm");

//generate README.md file w/ JS
const generateMarkdown = (data) => {
  return (`# ${data.title} ${confirm.createBadge(data.license)};
  
  
## Description
${data.description}
  
## Table of Contents
${confirm.confirmInstall(data.install)}
${confirm.confirmUsage(data.usage)}
${confirm.confirmContribute(data.constribute)}
${confirm.confirmTesting(data.test)}
*[License](#license)
*[Questions](#questions)


${confirm.createInstall(data.Install)}

${confirm.createUsage(data.Usage)}

${confirm.createContribute(data.contribute)}

${confirm.createTesting(data.test)}

## License
This application is covered under the ${data.license}

## Questions
Check out my Github page: [${data.username}](https://www.github.com/${
    data.username
  })

Conact me at: [${data.email}](mailto:${data.email})`
  )
};

module.exports = generateMarkdown;
