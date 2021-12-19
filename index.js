const fs = require('fs');
const inquirer = require('inquirer');
const { template } = require('./template.js');

inquirer.prompt([{
            type: "input",
            name: "Title",
            message: `Enter a title`
        },
        {
            name: "License",
            type: "list",
            message: "Select the license",
            choices: [
                "MIT",
                "GNU GPL v3",
                "APACHE 2.0",
                "BSD 3",
                "None"
            ]
        },
        {
            type: "input",
            name: "Description",
            message: `Description`
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Installation instructions'
        },
        {
            type: "input",
            name: "Usage",
            message: `Usage instructions`
        },
        {
            type: 'input',
            name: 'Contributors',
            message: 'Contributors'
        },
        {
            type: 'input',
            name: 'Test',
            message: 'Testing'
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Email'
        },
        {
            type: 'input',
            name: 'Phone',
            message: 'Phone number'
        },
        {
            type: 'input',
            name: 'Username',
            message: 'GitHub username'
        },
    ])
    .then(answers => {
        if (answers.License === 'MIT') {
            answers.License = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        }
        if (answers.License === "GNU GPL v3") {
            answers.License = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        }
        if (answers.License === "APACHE 2.0") {
            answers.License = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        }
        if (answers.License === "BSD 3") {
            answers.License = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        }
        const data = template(answers);
        fs.writeFile('README.md', data, (err) => {
            if (err) {
                console.error(err);
            }
        })
    });