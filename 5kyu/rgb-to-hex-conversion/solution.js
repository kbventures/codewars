console.clear();
function rgb(r, g, b) {
    //RGB Code validation/ conversion
    const rgbToHex = function (arg) {
        let x = arg;
        //validate rgb values
        if (x < 0) {
            x = 0;
        } else if (x > 255) {
            x = 255;
        }
        //turn each rgb value into a hex value
        let hex = Number(x).toString(16);
        //ensure there are 2 digits in each hex value
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        //return hexcode
        console.log(hex);
        return hex;
    };

    let red = rgbToHex(r);
    let green = rgbToHex(g);
    let blue = rgbToHex(b);

    let hexColor = red + green + blue;
    console.log(hexColor.toUpperCase())
    return hexColor.toUpperCase();
};

//rgb(0, 0, 0); //, '000000')
rgb(0, 0, -20); //, '000000')
rgb(300, 255, 255); //, 'FFFFFF')
rgb(173, 255, 47); //, 'ADFF2F'




//PREP
//
// Parameters make up the three parts of the rgb clode, r red, b blue, green
// The 3 parameters are values from 0 to 255 and values outside of that range must be rounded 
// down the closet value(0 or 255)
//  Returns RGB converted to Hex. 6 characters, the shorthant is  required here. 

// HEX
let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function rgb(r, g, b) {
    //   // complete this function  
    //   let temp = ""
    //   console.log("Initial RGB")
    //   console.log(r,g,b)
    //   console.log('***')
    //   let rr = r;
    //   let gg = g;
    //   let bb = b; 

    //   if(bb < 0 || bb > 255){
    //     if(bb < 0) {
    //       bb = 0};
    //     if(bb>255) bb = 255
    //   }

    //     if(rr < 0 || rr > 255){
    //     if(rr < 0) {
    //       rr = 0};
    //     if(rr>255) rr = 255
    //   }

    //       if(gg < 0 || gg > 255){
    //     if(gg < 0) {
    //       gg= 0};
    //     if(gg>255) gg = 255
    //   }

    //   console.log('Values should be between 0 and 255')
    //   console.log(rr, gg, bb)
    //   console.log('***')
    //   temp = temp + hex[Math.floor(rr/16)]
    //   console.log(temp)
    //   temp = temp + hex[((rr % 16) * 16)]
    //   console.log(temp)


    //   console.log("UNIT TEST RR")
    //   console.log(rr/16)
    //   console.log(hex[Math.floor(rr/16)])
    //   console.log("***")

    //   temp = temp + hex[Math.floor(gg/200)]
    //   temp = temp + hex[gg % 200 * 16]

    //   temp = temp + hex[Math.floor(bb/200)]
    //   temp = temp + hex[bb % 200 * 16]

    //   console.log("Returned value")
    //   console.log(temp)
    //   console.log("***")

    //   return temp


    let temp = ((220 / 16) - (220 % 16))
    console.log(temp)
    console.log(220 % 16)
}
