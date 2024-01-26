const {Triangle, Square, Circle} = require("./shapes");

describe("Shape", ()=>{
    describe("Render Circle", ()=>{
        test("should render svg circle", ()=>{
            const shape = new Triangle("blue");
            expect(shape.render()).toEqual('<polygon points="150,0 50,200 250,200" fill="blue"/>');
        });
    });
});
