function template(data) {
    return `
# ${data.Title}
    
## Table of Contents
* [Description](#description)
* [Email](#email)
* [Phone](#phone)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)
## Title 
${data.Title}
## License
${data.License}
## Description
${data.Description}
## Installation 
${data.Installation}
## Usage Instructions
${data.Instructions}
## Contributors
${data.Contributors}
## Testing
${data.Test}
## Username
${data.Username}
## Email
${data.Email}
## Phone Number
${data.Phone}
## Questions
Contact me:
Github:[${data.Username}](https://github.com/${data.Username})
Email:[${data.Email}](https://github.com/${data.Email})
    `
};

module.exports = { template };