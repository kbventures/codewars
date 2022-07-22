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




