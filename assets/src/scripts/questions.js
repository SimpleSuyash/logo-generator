const questions =[
    {
        type: "input",
        name: "text",
        message: "What is the three logo characters?",
        maxLength: 3,
        validate: answer=> {
            if(answer.trim()===""){
                return "Please enter upto 3 characters for logo.";
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

module.exports = questions;