//importing questions module
//has all the prompts
const questions = require("./lib/questions");
//Including packages needed for this application
//importing inquirer node package
const inquirer = require("inquirer");

//importing generateSVG module
const {generateSVG} = require("./lib/generateSVG");
//importing fs node module
const fsp = require("node:fs/promises");
const fs = require("node:fs");

//Colored symbols for various log levels
//includes info, success, warning and error
const logSymbols = require("log-symbols");

// Writes logo.svg file in the output folder
async function writeToFile(data){
    try{
        await fsp.writeFile("./output/logo.svg", data);
        const filePath= fs.realpathSync("./output/");
        console.info(`${logSymbols.success}`, `\x1b[3;92mGenerated ${filePath}\\logo.svg!\x1b[0m`);
    }catch(err){
        console.error(`${logSymbols.error}`, `\x1b[3;31m${err}\x1b[0m`);
    }
    /*
    fs.writeFile(`./output/logo.svg`, data, err =>{
        if (err){
            console.error(`${logSymbols.error}`, `\x1b[3;31m${err}\x1b[0m`);
        }
        else{
            const filePath= fs.realpathSync("./output/");
            console.log(`${logSymbols.success}`, `\x1b[3;92mGenerated ${filePath}\\logo.svg!\x1b[0m`);
        }
    });
    */
}

// Creates a function to initialize app
async function init() {
    //loading the inquirer to initiate the prompts
    /*
    inquirer
        .prompt(questions)
        .then(
            response=>{
                console.log(response);
                writeToFile(generateSVG(response) );
            }
        )
        .catch((error) => {
            if (error.isTtyError) {
                console.error(`${logSymbols.error}`, `\x1b[3;31mPrompt couldn't be rendered in the current environment\x1b[0m`);
            } else {
                console.error(`${logSymbols.error}`, `\x1b[3;31m${error}\x1b[0m`);
                console.error(`${logSymbols.error}`, `\x1b[3;31mSomething else went wrong\x1b[0m`);
            }
        });
    */
    try{
        const response = await inquirer.prompt(questions);
        console.log(response);
        writeToFile(generateSVG(response) );
    }catch(error){
        if (error.isTtyError) {
            console.error(`${logSymbols.error}`, `\x1b[3;31mPrompt couldn't be rendered in the current environment\x1b[0m`);
        } else {
            console.error(`${logSymbols.error}`, `\x1b[3;31m${error}\x1b[0m`);
            console.error(`${logSymbols.error}`, `\x1b[3;31mSomething else went wrong\x1b[0m`);
        }
    }
}

// Calling init function to initialize app
init();