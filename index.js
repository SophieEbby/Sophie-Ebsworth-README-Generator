const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
      },
      {
        type: "input",
        message: "What is your project's description?",
        name: "description"
      },
      {
        type: "input",
        message: "What are your project's installation instructions?",
        name: "installation",
        default: "npm i, node index.js"
      },
      {
        type: "input",
        message: "What is your project's intended usage?",
        name: "usage"
      },
      {
        type: "list",
        message: "How is this project licensed?",
        name: "license",
        choices: ["Apache", "Boost Software", "Creative Commons", "GNU", "ISC", "MIT", "Mozilla Public", "The Unlicense", "Other"]
      },
      {
        type: "input",
        message: "How does someone contribute to this project?",
        name: "contribute"
      },
      {
        type: "input",
        message: "What commands should be run to run tests?",
        name: "tests",
        default: "N/A"
      },
      {
        type: "input",
        message: "Who needs credit on this project?",
        name: "credits"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
      },
];

// function to write README file
function writeToFile(fileName, data) {
    const distPath = path.join(process.cwd(), 'dist', fileName);
    return fs.writeFileSync(distPath, data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile("sampleREADME.md", generateMarkdown(response))
      });
}

// function call to initialize program
init();
