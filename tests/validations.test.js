const { validateShape, validateText, validateColour } = require("../lib/validations");


//testing shapes validation
describe("Shape", ()=>{
    //testing Triangle validation
    describe("Validate Triangle Input", ()=>{
        test("should return 'triangle'", ()=>{
            const shape = " TriANgle";
            expect(validateShape(shape)).toEqual('triangle');
        });
    });

    //testing Square validation
    describe("Validate Square Input", ()=>{
        test("should return 'square'", ()=>{
            const shape = " SqUaRe   ";
            expect(validateShape(shape)).toEqual('square');
        });
    });

    //testing Circle validation
    describe("Validate Circle Input", ()=>{
        test("should return 'circle'", ()=>{
            const shape =  " ciRcle   ";
            expect(validateShape(shape)).toEqual('circle');
        });
    });

    //testing wrong shape validation
    describe("Validate Invalid Shape Input", ()=>{
        test("should throw an error", ()=>{
            const shape = "NotAShape";
            const err = "Invalid logo shape.";
            const validation = () => validateShape(shape);
            expect(validation).toThrowError(err);
        });
    });

    //testing empty shape validation
    describe("Validate Empty Shape Input", ()=>{
        test("should throw an error", ()=>{
            const shape = "   ";
            const err = "Invalid logo shape: Empty value received.";
            const validation = () => validateShape(shape);
            expect(validation).toThrowError(err);
        });
    });

    //testing null shape validation
    describe("Validate Null Shape Input", ()=>{
        test("should throw an error", ()=>{
            const shape = null;
            const err = "Invalid logo shape: No value received.";
            const validation = () => validateShape(shape);
            expect(validation).toThrowError(err);
        });
    });
});

//testing logo text validation
describe("Text", ()=>{
    //testing 3 chars Text validation
    describe("Validate 3 Characters Text Input", ()=>{
        test("should return the logo text", ()=>{
            const text = "  SMN  ";
            expect(validateText(text)).toEqual('SMN');
        });
    });

    //testing 1 char Text validation
    describe("Validate 1 Character Text Input", ()=>{
        test("should return the logo text", ()=>{
            const text = "  S  ";
            expect(validateText(text)).toEqual('S');
        });
    });

    //testing null text validation
    describe("Validate Null Text Input", ()=>{
        test("should throw an error", ()=>{
            const text = null;
            const err = "Invalid logo text: No value received.";
            const validation = () => validateText(text);
            expect(validation).toThrowError(err);
        });
    });

    //testing empty text validation
    describe("Validate Empty Text Input", ()=>{
        test("should throw an error", ()=>{
            const text = "    ";
            const err = "Invalid logo text: Empty value received.";
            const validation = () => validateText(text);
            expect(validation).toThrowError(err);
        });
    });

    //testing  too long text validation
    describe("Validate Too Long Text Input", ()=>{
        test("should throw an error", ()=>{
            const text = "ABCD";
            const err = "Invalid logo text: Value entered is too long.";
            const validation = () => validateText(text);
            expect(validation).toThrowError(err);
        });
    });

});

//testing logo/text colour validation
describe("Colour", ()=>{
    //testing Colour Name validation
    describe("Validate Colour Name Input", ()=>{
        test("should return the colour name", ()=>{
            const colour = "  rEbEccaPurple  ";
            expect(validateColour(colour)).toEqual('rEbEccaPurple');
        });
    });

    //testing Hex Colour validation
    describe("Validate Hex Colour Input", ()=>{
        test("should return the hex colour", ()=>{
            const colour = "  #ff23Ee  ";
            expect(validateColour(colour)).toEqual('#ff23Ee');
        });
    });

    //testing Invalid Colour Name validation
    describe("Validate Wrong Colour Name Input", ()=>{
        test("should throw the error", ()=>{
            const colour = "ColourA";
            const validation = () => validateColour(colour);
            expect(validation).toThrowError("Invalid colour.");
        });
    });

    //testing Invalid Hex Colour validation
    describe("Validate Wrong Hex Colour Input", ()=>{
        test("should throw the error", ()=>{
            const colour = "#gg22zz";
            const validation = () => validateColour(colour);
            expect(validation).toThrowError("Invalid colour.");
        });
    });

    //testing rgb Colour validation
    describe("Validate RGB Colour Input", ()=>{
        test("should throw the error", ()=>{
            const colour = "rgb(21, 22, 23";
            const validation = () => validateColour(colour);
            expect(validation).toThrowError("Invalid colour.");
        });
    });

    //testing hsl Colour validation
    describe("Validate HSL Colour Input", ()=>{
        test("should throw the error", ()=>{
            const colour = "hsl(210, 50%, 100%";
            const validation = () => validateColour(colour);
            expect(validation).toThrowError("Invalid colour.");
        });
    });

    //testing empty Colour validation
    describe("Validate Empty Colour Input", ()=>{
        test("should throw the error", ()=>{
            const colour = "     ";
            const validation = () => validateColour(colour);
            expect(validation).toThrowError("Invalid colour.");
        });
    });
    //testing null Colour validation
    describe("Validate Null Colour Input", ()=>{
        test("should throw the error", ()=>{
            const colour = null;
            const validation = () => validateColour(colour);
            expect(validation).toThrowError("Invalid colour: Null value received.");
        });
    });
});