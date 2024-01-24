//importing questions module
//has all the prompts
const questions = require("./lib/questions");
//Including packages needed for this application
//importing inquirer node package
const inquirer = require("inquirer");
const ora = require("ora");

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
/*
//Before we make our async call, we’ll start the spinner
const spinner = ora("Getting headlines...").start();
//-----const $homepage = await getPageContents(homepageUrl);
//Once the call is done, we can stop the spinner
spinner.succeed("ESPN headlines received");

*/
// Calling init function to initialize app
init();