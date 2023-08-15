// Conditional statements to render Installation, Usage, Contributions, and Testing. If true create header
const createInstall = (install) => {
  if (install) {
    `##Installation ${install}`;
  } else {
    return "";
  }
};
const createUsage = (usage) => {
  if (usage) {
    `## Usage ${usage}`;
  } else {
    return "";
  }
};
const createContribute = (constribute) => {
  if (constribute) {
    `##Constribute ${constribute}`;
  } else {
    return "";
  }
};
const createTesting = (test) => {
  if (test) {
    `##Testing ${test}`;
  } else {
    return "";
  }
};

// Create badges for selected license
const createBadge = (license) => {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
};

// confirm and create tabs for table of contents if each item has an input
const confirmInstall = (install) => {
  if (install) {
    ("* [Installation](#installation)");
  } else {
    return "";
  }
};
const confirmUsage = (usage) => {
  if (usage) {
    ("* [Usage](#usage)");
  } else {
    return "";
  }
};
const confirmContribute = (constribute) => {
  if (constribute) {
    ("* [Contributions](#contributions)");
  } else {
    return "";
  }
};
const confirmTesting = (test) => {
  if (test) {
    ("* [Testing](#testing)");
  } else {
    return "";
  }
};

module.exports = {
  createInstall,
  createUsage,
  createContribute,
  createTesting,
  createBadge,
  confirmInstall,
  confirmUsage,
  confirmContribute,
  confirmTesting,
};
