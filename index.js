const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([{
        type: "input",
        name: "test",
        message: 'test'
    }])
    .then(answers => {
        console.log(answers.test);
    })
    .catch(err => {
        console.log(err);
    });