//importing colour name and hex colour validation package
const { validateHTMLColorName, validateHTMLColorHex } = require("validate-color");


//validates input for shape
//valid shapes are triangle, square and circle
function validateShape(shapeInput){
    //when input for shape is not null
    if(shapeInput){
        let shape = shapeInput.trim().toLowerCase();
        const validShapes = ["triangle", "square", "circle"];
        let logoShape;
        //when user typed in empty strings/spaces
        if(shape === ""){
            throw new Error("Invalid logo shape: Empty value received.");
        //when there is actually some text other than empty strings/spaces
        }else{
            for(theShape of validShapes){
                if(theShape === shape){
                    //when user typed in valid shape
                    logoShape = shape;
                }
            }
        }
        //when user typed in some random input other than valid shape value
        if(logoShape === undefined){
            throw new Error("Invalid logo shape.");
        }
        return logoShape;
    //when user didn't type anything 
    //when input for shape value is null      
    }else{
        throw new Error("Invalid logo shape: No value received.");
    }
}

//validates the input for logo text
function validateText(textInput){
    //when input in not null
    if(textInput){
        const text = textInput.trim();
        let logoText;
        //when input is empty strings
        if(text === ""){
            throw new Error("Invalid logo text: Empty value received.");
        //when input is not empty strings
        }else{
            if(text.length > 3){
                throw new Error("Invalid logo text: Value entered is too long.");
            }else{
                logoText= text;
            }
        }
        return logoText;
    // when input is null
    // user pressed enter key without typing in anything
    }else{
        throw new Error("Invalid logo text: No value received.");
    }
}

//validates the input for colour input
function validateColour(colourInput){
    
    //when colour input is not null
    if(colourInput){
        const colour = colourInput.trim();
        if(validateHTMLColorHex(colour) || validateHTMLColorName(colour)){
            return colour;
        //when typed in colour value in not a valid colour
        }else{
            throw new Error("Invalid colour.");
        }
    //when colour input is null
    //user pressed enter key without typing in anything
    }else{
        throw new Error("Invalid colour: Null value received.");
    }
}

module.exports = {validateShape, validateText, validateColour};