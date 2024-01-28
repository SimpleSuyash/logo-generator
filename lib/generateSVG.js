//importing different shapes from shapes
const {Triangle, Square, Circle} = require("./shapes");
const {validateShape, validateText, validateColour} = require("./validations");

//creates logo text
function renderText(textInput, colourInput){
    const textColour = validateColour(colourInput);
    const text = validateText(textInput);
    return`<text x="150" y="125" style= "font: bold 74px Georgia, serif" fill="${textColour}" text-anchor="middle">${text}</text>`;
}

function renderShape(shapeInput, colourInput){
    const shape = validateShape(shapeInput);
    const shapeColour = validateColour(colourInput);
    let shapeObj;
    if(shape === "triangle"){
        shapeObj = new Triangle(shapeColour);
    }else if(shape === "square"){
        shapeObj = new Square(shapeColour);
    }else{
        shapeObj = new Circle(shapeColour)
    }
    return shapeObj.render();
}

//Generate the SVG logo with shape and text on top
function generateSVG(data){
    return `
<svg version="1.1" width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    ${renderShape(data.shape, data["shape-colour"])}
    ${renderText(data.text, data["text-colour"])}
</svg>
    `;
}

/*
//Generate the SVG image with 
//linear gradient from top right to bottom left 
//unlike above function, the fill colour is a linear gradient
function generateSVG(data){
    return `
<svg version="1.1" width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    ${renderShape(data.shape, "#lg-tr-bl")}
    ${renderText(data.text, data["text-colour"])}
    <defs>
        <linearGradient id="lg-tr-bl" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${data['shape-colour']}" />
            <stop offset="50%" stop-color="${data['shape-colour']}" stop-opacity="0.5" />
            <stop offset="100%" stop-color="${data['shape-colour']}" />
        </linearGradient>
    </defs>
</svg>
    `;
}
*/

//exporting functions
module.exports= {generateSVG, renderText, renderShape};