const fs = require('fs');
const inquirer = require('inquirer');
const { template } = require('./template.js');

inquirer.prompt([{
            type: "input",
            name: "Title",
            message: `Enter a title`
        }, {
            type: "input",
            name: "Instructions",
            message: `Enter usage instructions`
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
            name: 'Installation',
            message: 'Installation instructions'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Usage instructions'
        },
        {
            type: 'input',
            name: 'Contributors',
            message: 'Contributors'
        },
        {
            type: 'input',
            name: 'Username',
            message: 'GitHub username'
        },
    ])
    .then(answers => {
        const data = template(answers);
        fs.writeFile('README.md', data, (err) => {
            if (err) {
                console.error(err);
            }
        })
    });