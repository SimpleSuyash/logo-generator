//importing generateSVG, renderText and renderShape functions from generateSVG
const {generateSVG, renderText, renderShape} = require("../lib/generateSVG");

//testing renderText(textInput, colourInput) function
describe("Logo Text", () =>{
    //testing logo text rendering
    describe("Render Text", ()=>{
        test("should render logo caption/text", ()=>{
            const text = " SMN ";
            const textColour =" cyan ";
            const output = `<text x="150" y="125" style= "font: bold 74px Georgia, serif" fill="cyan" text-anchor="middle">SMN</text>`;
            expect(renderText(text, textColour)).toBe(output);
        });
    });

    //testing logo text rendering
    describe("Render Text", ()=>{
        test("should render logo caption/text", ()=>{
            const text = " SMN ";
            const textColour =" #000000 ";
            const output = `<text x="150" y="125" style= "font: bold 74px Georgia, serif" fill="#000000" text-anchor="middle">SMN</text>`;
            expect(renderText(text, textColour)).toBe(output);
        });
    });

    //testing correct text validation
    describe("Valid Text", ()=>{
        test("should not throw error", ()=>{
            const text = "   SMN";
            const textColour ="cyan  ";
            const renderLogoText = () => renderText(text, textColour);
            const err = new Error("");
            expect(renderLogoText).not.toThrowError(err);
        });
    });

    //testing logo text rendering
    describe("Too Long Text", ()=>{
        test("should throw error", ()=>{
            const text = "abcd";
            const textColour ="cyan  ";
            const renderLogoText = () => renderText(text, textColour);
            const err = new Error("Invalid logo text: Value entered is too long.");
            expect(renderLogoText).toThrowError(err);
        });
    }); 

    //testing empty logo text 
    describe("Empty Text", ()=>{
        test("should throw error", ()=>{
            const text = "  ";
            const textColour ="  cyan";
            const renderLogoText = () => renderText(text, textColour);
            const err = new Error("Invalid logo text: Empty value received.");
            expect(renderLogoText).toThrowError(err);
        });
    });

    //testing logo text rendering
    describe("Too Long Text", ()=>{
        test("should throw error", ()=>{
            const text = null;
            const textColour ="cyan  ";
            const renderLogoText = () => renderText(text, textColour);
            const err = new Error("Invalid logo text: No value received.");
            expect(renderLogoText).toThrowError(err);
        });
    }); 

    //testing empty logo text colour
    describe("Empty Text Colour", ()=>{
        test("should throw error", ()=>{
            const text = " SMN ";
            const textColour ="   ";
            const renderLogoText = () => renderText(text, textColour);
            const err = new Error("Invalid colour.");
            expect(renderLogoText).toThrowError(err);
        });
    });

    //testing null logo text colour
    describe("Null Text Colour", ()=>{
        test("should throw error", ()=>{
            const text = "SMN  ";
            const textColour = null;
            const renderLogoText = () => renderText(text, textColour);
            const err = new Error("Invalid colour: Null value received.");
            expect(renderLogoText).toThrowError(err);
        });
    }); 
    
    //testing wrong logo text colour
    describe("Wrong Text Colour", ()=>{
        test("should throw error", ()=>{
            const text = "SMN  ";
            const textColour = "NotAColour";
            const renderLogoText = () => renderText(text, textColour);
            const err = new Error("Invalid colour.");
            expect(renderLogoText).toThrowError(err);
        });
    }); 
});

//testing renderShape(shapeInput, colourInput)
describe("Logo Shape", ()=>{
    //testing Triangle shape rendering
    describe("Render Triangle Shape", ()=>{
        test("should render triangle shape", ()=>{
            const shape = "    triAngle";
            const shapeColour ="black";
            const output = `<polygon points="150,0 50,200 250,200" fill="black"/>`;
            expect(renderShape(shape, shapeColour)).toBe(output);
        });
    });
    //testing Square shape rendering
    describe("Render Square Shape", ()=>{
        test("should render square shape", ()=>{
            const shape = "sQuArE       ";
            const shapeColour ="#000000";
            const output = `<rect x="50" y="0" width="200" height="200" fill="#000000"/>`;
            expect(renderShape(shape, shapeColour)).toBe(output);
        });
    });

    //testing Circle shape rendering
    describe("Render Circle Shape", ()=>{
        test("should render circle shape", ()=>{
            const shape = "     CiRcLe ";
            const shapeColour ="black";
            const output = `<circle cx="150" cy="100" r="100" fill="black"/>`;
            expect(renderShape(shape, shapeColour)).toBe(output);
        });
    });

    //testing wrong shape validation
    describe("Validate Invalid Shape Input", ()=>{
        test("should throw an error", ()=>{
            const shape = "NotAShape";
            const shapeColour= " cyan   ";
            const err = "Invalid logo shape.";
            const validation = () => renderShape(shape, shapeColour);
            expect(validation).toThrowError(err);
        });
    });
    //testing null shape validation
    describe("Validate Null Shape Input", ()=>{
        test("should throw an error", ()=>{
            const shape = null;
            const shapeColour= " cyan   ";
            const err = "Invalid logo shape: No value received.";
            const validation = () => renderShape(shape, shapeColour);
            expect(validation).toThrowError(err);
        });
    });

    //testing empty shape validation
    describe("Validate Empty Shape Input", ()=>{
        test("should throw an error", ()=>{
            const shape = "    ";
            const shapeColour= " cyan   ";
            const err = "Invalid logo shape: Empty value received.";
            const validation = () => renderShape(shape, shapeColour);
            expect(validation).toThrowError(err);
        });
    });

    //testing empty logo colour
    describe("Empty Logo Colour Value", ()=>{
        test("should throw error", ()=>{
            const shape = " circle ";
            const shapeColour ="   ";
            const renderLogoText = () => renderShape(shape, shapeColour);
            const err = new Error("Invalid colour.");
            expect(renderLogoText).toThrowError(err);
        });
    });

    //testing null logo colour
    describe("Null Logo Colour Value", ()=>{
        test("should throw error", ()=>{
            const shape = "circle ";
            const shapeColour = null;
            const renderLogoText = () => renderShape(shape, shapeColour);
            const err = new Error("Invalid colour: Null value received.");
            expect(renderLogoText).toThrowError(err);
        });
    }); 
    //testing wrong logo colour
    describe("Wrong Logo Colour Value", ()=>{
        test("should throw error", ()=>{
            const shape = "circle  ";
            const shapeColour = "NotAColour";
            const renderLogoText = () => renderShape(shape, shapeColour);
            const err = new Error("Invalid colour.");
            expect(renderLogoText).toThrowError(err);
        });
    }); 
});

//testing generateSVG(data)
describe("Generate SVG", ()=>{
    //testing logo generating/rendering
    describe("Generate SVG", ()=>{
        test("should generate svg", ()=>{
            const data = {
                text: 'SMN',
                'text-colour': 'cyan',
                shape: 'square',
                'shape-colour': 'black'
                };
            const output = `
<svg version="1.1" width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="0" width="200" height="200" fill="black"/>
    <text x="150" y="125" style= "font: bold 74px Georgia, serif" fill="cyan" text-anchor="middle">SMN</text>
</svg>
    `;
            expect(generateSVG(data)).toEqual(output);
        });
    });
});