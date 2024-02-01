const {validateColour} =require("./validations");
//declaring triangle attributes
const TriangleAttributes = {
    X1 : 150,
    Y1 : 0,
    X2 : 50,
    Y2 : 200,
    X3 : 250,
    Y3 : 200
}
//declaring Square attributes
const SquareAttributes ={
    XCord: 50,
    YCord: 0,
    Width: 200,
    Height: 200
}
//declaring Circle attributes
const CircleAttributes = {
    XOrigin: 150,
    YOrigin: 100,
    Radius: 100
}
//creating Shape Class
class Shape {
    constructor(bgColour){
        const shapeColour = validateColour(bgColour);
        this.bgColour =  shapeColour;
    }
    //defining the render method
    render(){
        //return null;
        throw new Error("Child classes must override render method in Shape Class.");
    }
}
//Triangle class inherits Shape class
class Triangle extends Shape{
    constructor(bgColour){
        super(bgColour);
        this.x1 = TriangleAttributes.X1;
        this.y1 = TriangleAttributes.Y1;
        this.x2 = TriangleAttributes.X2;
        this.y2 = TriangleAttributes.Y2;
        this.x3 = TriangleAttributes.X3;
        this.y3 = TriangleAttributes.Y3;
    }
    //overriding render method
    render(){
        //returns a polygon with three sides (an Equilateral triangle)
        //point1(150, 0)  point2(50, 200) point3(250, 200)
        return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.bgColour}"/>`;
        /*
        //with linear gradient fill
        return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="url(${this.bgColour})" />`;
        */
    }
}

class Square extends Shape{
    constructor(bgColour){
        super(bgColour);
        this.xTopLeft = SquareAttributes.XCord;
        this.yTopLeft = SquareAttributes.YCord;
        this.width = SquareAttributes.Width;
        this.height = SquareAttributes.Height
    }
    render(){
        //returns a rectangle with starting point(0, 0) and width = 200px, height = 200px
        return `<rect x="${this.xTopLeft}" y="${this.yTopLeft}" width="${this.width}" height="${this.height}" fill="${this.bgColour}"/>`;
        /*
        //with linear gradient fill
        return `<rect x="${this.xTopLeft}" y="${this.yTopLeft}" width="${this.width}" height="${this.height}" fill="url(${this.bgColour})" />`;
        */
    }
}

class Circle extends Shape{
    constructor(bgColour){
        super(bgColour);
        this.cx = CircleAttributes.XOrigin;
        this.cy = CircleAttributes.YOrigin;
        this.r = CircleAttributes.Radius;
    }
    render(){
        //return a circle with centre(150px, 100px) and radius =100px
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.bgColour}"/>`;
        /*
        //circle with linear gradient of given colour
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="url(${this.bgColour})"/>`;
        */
    }
}

//exporting the classes
module.exports={Triangle, Square, Circle, Shape};