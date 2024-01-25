//importing the inquirer package
const inquirer = require("inquirer");
//importing inquirer-maxlength-input-prompt package
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("input-max3", maxLengthInputPrompt);

/*
//unicode codes ✔︎ ✖ for user input validation
//if user input is valid, displays ✔︎ 
//if user input is not valid, displays ✖
const figures = require('figures');
*/

//can change terminal text-colour
const chalk = require("chalk");


//Colored symbols for various log levels
//includes info, success, warning and error
const logSymbols = require("log-symbols");

//Validate Color let's an user validate the color string against all current possible HTML color values
//only importing colour name and hex colours validation
//other posible validation are for rgb, rgba, hsl, hsla, hwb, lab, lch
const { validateHTMLColorName, validateHTMLColorHex } = require("validate-color");
//following imports all the validations
// const validateColor = require("validate-color").default;

//creating questions for inquirer prompts
const questions = [

    //question for logo text
    {
        type: "input-max3",
        name: "text",
        message: `What are the logo ${chalk.blueBright("characters")} (type upto 3 characters)?`,
        maxLength: 3,
        validate: answer => {
            if (answer.trim() === "") {
                //when validation fails, display ✖ in red colour
                /*
                console.log(`\x1b[3;91m ${figures.cross}"logo-text"}\x1b[0m`);
                */

                /*
                     ANSI Escape Sequence
                     Hexadecimal: \x1B
                     [3;31m : italic red 
                     [3m: italic mode
                     [0m: reset all modes (styles and colors)
                */
                
                console.log(`    ${logSymbols.error}`, `\x1b[3;31mlogo-text!\x1b[0m`);
                return "Please enter valid characters for logo.";
            }
            //when validation passes, display ✔︎ in bright green colour
            /*
            console.log( `\x1b[92m ${figures.tick}"logo-text!")}\x1b[0m`);
            */
            console.log(`   ${logSymbols.success}`, `\x1b[3;92mlogo-text!\x1b[0m`);
            
            return true;
        }
    },

    //question for logo text colour
    {
        type: "input",
        name: "text-colour",
        message: `What should be the logo's ${chalk.blueBright("text colour")} (Enter a CSS named colour or a #hexadecimal value)?`,
        validate: answer => {
            if (validateHTMLColorHex(answer.trim()) || validateHTMLColorName(answer.trim())) {
                //when validation passes, display ✔︎ in bright green colour
                console.log(`    ${logSymbols.success}`, `\x1b[3;92mtext-colour!\x1b[0m`);
                return true;
            }
            //when validation fails, display ✖ in bright red colour
            console.log(`    ${logSymbols.error}`, `\x1b[3;31mtext-colour!\x1b[0m`);
            return "Please enter a valid text colour.";
        }
    },

    //question for logo shape
    {
        type: "list",
        name: "shape",
        message: `What ${chalk.blueBright("shape")} is to be used for the logo?`,
        choices: ["Triangle", "Square", "Circle"]
    },

    //question for logo shape colour
    {
        type: "input",
        name: "shape-colour",
        message:(response)=> `What should be the ${chalk.blueBright(response.shape)}${chalk.blueBright("'s colour")}(Enter a CSS named colour or a #hexadecimal value)?`,
        validate: answer => {
            if (validateHTMLColorHex(answer.trim()) || validateHTMLColorName(answer.trim())) {
                //when validation passes, display ✔︎ in bright green colour
                console.log(`    ${logSymbols.success}`, `\x1b[3;92mshape-colour!\x1b[0m`);
                return true;
            }
            //when validation fails, display ✖ in bright red colour
            console.log(`    ${logSymbols.error}`, `\x1b[3;31mshape-colour!\x1b[0m`);
            return "Please enter a valid shape colour.";
        }
    },
];

//exporting the questions array
module.exports = questions;