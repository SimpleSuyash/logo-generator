//importing different shapes from shapes
const {Triangle, Square, Circle} = require("./shapes");
const {validateShape, validateText, validateColour} = require("./validations");
//declaring text position attributes
const TextPosition ={
    XCord : 150,
    YCord: 125
}
//declaring SVG attributes
const SVGAttributes = {
    Width: 300,
    Height: 200,
}
//declaring Viewbox attributes
const ViewBoxAttributes = {
    XOffset: 0,
    YOffset: 0,
    Width: 300,
    Height: 200
}
//renders logo text
function renderText(textInput, colourInput){
    const textColour = validateColour(colourInput);
    const text = validateText(textInput);
    return`<text x="${TextPosition.XCord}" y="${TextPosition.YCord}" style= "font: bold 74px Georgia, serif" fill="${textColour}" text-anchor="middle">${text}</text>`;
}

//makes an appropriate shape object and calls its render method
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
<svg version="1.1" width="${SVGAttributes.Width}" height="${SVGAttributes.Height}" viewBox="${ViewBoxAttributes.XOffset} ${ViewBoxAttributes.Yoffset} ${ViewBoxAttributes.Width} ${ViewBoxAttributes.Height}" xmlns="http://www.w3.org/2000/svg">
    ${renderShape(data.shape, data["shape-colour"])}
    ${renderText(data.text, data["text-colour"])}
</svg>
    `;
}

//exporting functions
module.exports= {generateSVG, renderText, renderShape};
