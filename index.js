//importing questions module
//has all the prompts
const questions = require("./lib/questions");
//Including packages needed for this application
//importing inquirer node package
const inquirer = require("inquirer");
const ora = require("ora");

//importing generateHTML module
const renderLogo = require("./lib/generateHTML");
//importing fs node module
const fs = require("node:fs");


// Writes README file in the root folder
function writeToFile(fileName, data){
    //Before we make our async call, we’ll start the spinner
    const spinner = ora("Getting headlines...").start();
    fs.writeFile(`./${fileName}.html`, data, err =>{
        if (err){
            // console.log(err);
            spinner.fail(err);
        }
        else{
            const filePath= fs.realpathSync("./");
            // console.log(`${filePath}\\${fileName}.html has been created.`);
            spinner.succeed(`${filePath}\\${fileName}.html has been created.`);
        }
    });
  }
// Creates a function to initialize app
function init() {
    //loading the inquirer to initiate the prompts
    inquirer
        .prompt(questions)
        .then(
            response=>{
                console.log(response);
                writeToFile("generated-logo", renderLogo(response) );
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