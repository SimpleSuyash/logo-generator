//importing the inquirer package
const inquirer = require("inquirer");
//importing inquirer-maxlength-input-prompt package
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("input-max3", maxLengthInputPrompt);
//creating questions for inquirer prompts
/*
//unicode codes ✔︎ ✖ for user input validation
//if user input is valid, displays ✔︎ 
//if user input is not valid, displays ✖
const figures = require('figures');
*/

const logSymbols = require('log-symbols');

//Validate Color let's an user validate the color string against all current possible HTML color values
//only importing colour name and hex colours validation
//other posible validation are for rgb, rgba, hsl, hsla, hwb, lab, lch
const {validateHTMLColorName, validateHTMLColorHex} = require("validate-color");
//following imports all the validations
// const validateColor = require("validate-color").default;

const questions =[
    {
        type: "input-max3",
        name: "text",
        message: "What are the the logo characters?",
        maxLength: 3,
        validate: answer=> {
            if(answer.trim()===""){
                //when validation fails, display ✖ in red colour
                /*
                console.log(`\x1b[91m ${figures(" ...✖text-colour")}\x1b[0m`);
                */
               /*
                    ANSI Escape Sequence
                    Hexadecimal: \x1B
                    [3;31m : italic red 
                    [3m: italic mode
                    [0m: reset all modes (styles and colors)
               */
                // console.log(`\x1b[3;31m ... ${logSymbols.error}\x1b[0m`, `\x1b[3;31m logo text check!\x1b[0m`);
                console.log(` ... ${logSymbols.error}`, `\x1b[3;31m logo text check!\x1b[0m`);
                return "Please enter valid characters for logo.";
            }
            //when validation passes, display ✔︎ in bright green colour
            /*
            console.log( `\x1b[92m ${figures(" ...✔︎text-colour!")}\x1b[0m`);
            */
            console.log(`... ${logSymbols.success}`, `\x1b[3;92m logo text check!\x1b[0m`);
            return true;
        }
    },
    {
        type: "input",
        name: "text-colour",
        message: "What should be the logo's text colour?",
        validate: answer=> {
            if(validateHTMLColorHex(answer.trim()) || validateHTMLColorName(answer.trim())){
                //when validation passes, display ✔︎ in bright green colour
                console.log(`... ${logSymbols.success}`, `\x1b[3;92m text-colour!\x1b[0m`);
                return true;
            }
            //when validation fails, display ✖ in bright red colour
            console.log(`... ${logSymbols.error}`, `\x1b[3;31m text-colour!\x1b[0m`);
            return "Please enter a valid text colour.";
        }
    },
    {
        type: "list",
        name: "shape",
        message: "What shape is to be used for the logo?",
        choices: ["Triangle", "Square", "Circle"]
    },
    {
        type: "input",
        name: "shape-colour",
        message: "What should be the colour of the shape in the logo?",
        validate: answer=> {
            if(answer.trim()===""){
                return "Please enter a valid backgrond colour of the logo.";
            }
            return true;
        }
    },
];

//exporting the questions array
module.exports = questions;