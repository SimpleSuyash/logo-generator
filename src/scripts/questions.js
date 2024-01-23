//importing the inquirer package
const inquirer = require("inquirer");
//importing inquirer-maxlength-input-prompt package
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("input-max3", maxLengthInputPrompt);
//creating questions for inquirer prompts
const questions =[
    {
        type: "input-max3",
        name: "text",
        message: "What are the the logo characters?",
        maxLength: 3,
        validate: answer=> {
            if(answer.trim()===""){
                return "Please enter valid characters for logo.";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "text-colour",
        message: "What should be the logo's text colour?",
        validate: answer=> {
            if(answer.trim()===""){
                return "Please enter a valid text colour.";
            }
            return true;
        }
    },
    {
        type: "list",
        name: "shape",
        message: "What shape is to be used for the logo?",
        choices: ["Triangel", "Square", "Circle"]
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