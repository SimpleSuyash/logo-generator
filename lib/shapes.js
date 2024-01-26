class Shape {
    constructor(bgColour){
        this.bgColour =  bgColour;
    }
    render(){
        return null;
    }
}

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
    render(){
        return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.bgColour}"/>`;
        // return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="url(${this.bgColour})" />`;
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
        return `<rect x="${this.xTopLeft}" y="${this.yTopLeft}" width="${this.width}" height="${this.height}" fill="${this.bgColour}"/>`;
        // return `<rect x="${this.xTopLeft}" y="${this.yTopLeft}" width="${this.width}" height="${this.height}" fill="url(${this.bgColour})" />`;
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
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.bgColour}"/>`;
        // return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="url(${this.bgColour})"/>`;
    }
}

module.exports={Triangle, Square, Circle};