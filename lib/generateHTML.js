
const {Triangle, Square, Circle} = require("./shapes");

function renderShape(shape, shapeColour){
    let logoShape;
    logoShape = shape === "Triangle"? new Triangle(shapeColour)
        : shape === "Square" ? new Square(shapeColour)
        : shape === "Circle" ?  new Circle(shapeColour)
        :null;
    return logoShape.createSVGShape();
}

function renderText(text, textColour){
    return`
    <text x="150" y="125" style= "font: bold 82px Georgia, serif;" fill="${textColour}" text-anchor="middle">${text}</text>
    `;
}

//Generate the HTML page
function generateHTML(data){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG LOGO</title>
</head>
<body style ="overflow: hidden">
    <div style="display: flex; width: 100dvw; height: 100dvh;  justify-content: center; align-items: center;">
    <!-- insert svg logo below -->
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${renderShape(data.shape, data["shape-colour"])}
            ${renderText(data.text, data["text-colour"])}
        </svg>
    </div>
</body>
</html>
    `;
}

module.exports= generateHTML;