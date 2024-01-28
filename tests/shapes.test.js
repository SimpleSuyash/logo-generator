//importing Triangle, Square and Circl from shapes
const {Triangle, Square, Circle} = require("../lib/shapes");

describe("Shape", ()=>{
    //testing Triangle rendering
    describe("Render Triangle", ()=>{
        test("should render svg triangle", ()=>{
            const shape = new Triangle("blue  ");
            expect(shape.render()).toEqual('<polygon points="150,0 50,200 250,200" fill="blue"/>');
        });
    });

    //testing Square rendering
    describe("Render Square", ()=>{
        test("should render svg square", ()=>{
            const shape = new Square("blue    ");
            expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue"/>');
        });
    });

    //testing Circle rendering
    describe("Render Circle", ()=>{
        test("should render svg circle", ()=>{
            const shape = new Circle("blue    ");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue"/>');
        });
    });

    //testing Triangle instance
    describe("Instance of Triangle", ()=>{
        test("should be an instance of Triangle", ()=>{
            const shape = new Triangle("  bLue");
            expect(shape).toBeInstanceOf(Triangle);
        });
    });

    //testing Square instance
    describe("Instance of Square", ()=>{
        test("should be an instance of Square", ()=>{
            const shape = new Square("  bLUe");
            expect(shape).toBeInstanceOf(Square);
        });
    });

    //testing Circle instance
    describe("Instance of Circle", ()=>{
        test("should be an instance of Circle", ()=>{
            const shape = new Circle(" BluE ");
            expect(shape).toBeInstanceOf(Circle);
        });
    });

    //testing wrong colour validation
    describe("Wrong Colour Validation", ()=>{
        test("should throw error for wrong colour input", ()=>{
            const shape = () => new Triangle(" ABC ");
            const err = new Error("Invalid colour.");
            expect(shape).toThrowError(err);
        });
    });

    //testing valid Hex colour validation
    describe("Hex Colour Validation", ()=>{
        test("should not throw error for valid colour input", ()=>{
            const shape = () => new Triangle(" #ff1123 ");
            const err = new Error("Invalid colour.");
            expect(shape).not.toThrowError(err);
        });
    });

    //testing valid colour name validation
    describe("Name Colour Validation", ()=>{
        test("should not throw error for valid colour input", ()=>{
            const shape = () => new Circle("RebeccaPurple");
            // const shape = () => new Circle("    RebeccaPurple");
            const err = new Error("Invalid colour.");
            expect(shape).not.toThrowError(err);
        });
    });

    //testing RGB colour validation
    //this app only accepts colour name and hex colour value
    //so rgb is invalid
    describe("RGB Colour Validation", ()=>{
        test("should throw error for rgb colour input", ()=>{
            const shape = () => new Circle("rgb(112,10,25)");
            const err = new Error("Invalid colour.");
            expect(shape).toThrowError(err);
        });
    });

    //testing HSL colour validation
    describe("HSL Colour Validation", ()=>{
        test("should throw error for hsl colour input", ()=>{
            const shape = () => new Square("hsl(120,50%,100%)");
            const err = new Error("Invalid colour.");
            expect(shape).toThrowError(err);
        });
    });
});
