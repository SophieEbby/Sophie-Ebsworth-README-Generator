// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Credits](#credits)
  * [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ![License badge](https://img.shields.io/badge/license-${data.license}-brightgreen).

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Credits

  ${data.credits}

  ## Questions

  If you have further questions, you can reach me at ${data.email}. For more of my work, see [my GitHub](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
