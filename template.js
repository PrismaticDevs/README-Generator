function template(data) {
    return `
# ${data.Title}
    
## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#instructions)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## License
${data.License}
## Description
${data.Description}
## Installation 
${data.Installation}
## Usage
${data.Usage}
## Contributors
${data.Contributors}
## Testing
${data.Test}
## Questions
Contact me:
Github: [${data.Username}](https://github.com/${data.Username}) <br>
Email: [${data.Email}](${data.Email}) <br>
Phone: [${data.Phone}](${data.Phone}) <br>
    `
};

module.exports = { template };