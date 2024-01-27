const {Triangle, Square, Circle} = require("./shapes");

describe("Shape", ()=>{
    //testing Triangle rendering
    describe("Render Triangle", ()=>{
        test("should render svg triangle", ()=>{
            const shape = new Triangle("blue");
            expect(shape.render()).toEqual('<polygon points="150,0 50,200 250,200" fill="blue"/>');
        });
    });

    //testing Square rendering
    describe("Render Square", ()=>{
        test("should render svg square", ()=>{
            const shape = new Square("blue");
            expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue"/>');
        });
    });

    //testing Circle rendering
    describe("Render Circle", ()=>{
        test("should render svg circle", ()=>{
            const shape = new Circle("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue"/>');
        });
    });

    //testing Triangle instance
    describe("Instance of Triangle", ()=>{
        test("should be an instance of Triangle", ()=>{
            const shape = new Triangle("blue");
            expect(shape).toBeInstanceOf(Triangle);
        });
    });

    //testing Square instance
    describe("Instance of Square", ()=>{
        test("should be an instance of Square", ()=>{
            const shape = new Square("blue");
            expect(shape).toBeInstanceOf(Square);
        });
    });

    //testing Circle instance
    describe("Instance of Triangle", ()=>{
        test("should be an instance of Triangle", ()=>{
            const shape = new Circle("blue");
            expect(shape).toBeInstanceOf(Circle);
        });
    });

});
