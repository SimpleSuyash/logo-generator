//importing questions module
//has all the prompts
const questions = require("./src/scripts/questions");
//Including packages needed for this application
//importing inquirer node package
const inquirer = require("inquirer");

// Creates a function to initialize app
function init() {
    //loading the inquirer to initiate the prompts
    inquirer
        .prompt(questions)
        .then(
            response=>{
                console.log(response);
            }
        )
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log(error);
                console.log("Something else went wrong");
            }
        });
}

// Calling init function to initialize app
init();