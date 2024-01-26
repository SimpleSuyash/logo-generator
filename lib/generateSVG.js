
const {Triangle, Square, Circle} = require("./shapes");

function renderShape(shape, shapeColour){
    let logoShape;
    logoShape = shape === "Triangle"? new Triangle(shapeColour)
        : shape === "Square" ? new Square(shapeColour)
        : shape === "Circle" ?  new Circle(shapeColour)
        : null;
    return logoShape.render();
}

function renderText(text, textColour){
    return`<text x="150" y="125" style= "font: bold 74px Georgia, serif" fill="${textColour}" text-anchor="middle">${text}</text>`;
}

//Generate the SVG image with fill colour
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
module.exports= generateSVG;