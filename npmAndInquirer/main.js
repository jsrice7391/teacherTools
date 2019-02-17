var inquirer = require('inquirer');
var location = require("./API/location")


console.log(location)



var start = [{
    type: "input",
    name: "location",
    message: "whats yo location?"
}, {
    type: "confirm",
    name: "sleepy",
    message: "Are you sleepy?"
}, {
    type: "list",
    name: "choice",
    message: "What should we do?",
    choices: ["coffeeeeeee", "sleep", "chase dogs", "play in traffic"]
}];

function ask(questions) {
    inquirer.prompt(questions).then(answers => {
        console.log(location.whisper(answers.location))
        console.log(location.yellAtLocation())
    });
}

ask(start)