const {validateColour} =require("./validations");

//creating Shape Class
class Shape {
    constructor(bgColour){
        const shapeColour = validateColour(bgColour);
        this.bgColour =  shapeColour;
    }
    //defining the render method
    render(){
        return null;
    }
}
//Triangle class inherits Shape class
class Triangle extends Shape{
    constructor(bgColour){
        super(bgColour);
        this.x1 = 150;
        this.y1 = 0;
        this.x2 = 50;
        this.y2 = 200;
        this.x3 = 250;
        this.y3 = 200;
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
        this.xTopLeft = 50;
        this.yTopLeft = 0;
        this.width = 200;
        this.height = 200;
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
        this.cx = 150;
        this.cy = 100;
        this.r = 100;
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
module.exports={Triangle, Square, Circle};