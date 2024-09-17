// https://leetcode.com/problems/integer-to-english-words/
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {

    const Millions = ["Million"]
    const Thousands = ["Thousand"]
    const Hundreds = ["Hundred"]
    const Tens = ["Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Heighty", "Ninety"]
    const TentoNineteen = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Heighteen", "Nineteen"]
    const Base10 = ["Zero","One","Two","Three","Four","Five","Six","Seven","Height","Nine"] 
    let result = "";



    // Three Thoussand Two hundred Twenty One
    // Four Hundred Thousand Thirty Four
    // Five Million Six Hundred Thousand Sixty One
    // Maximmum range is 2 million so 2 000 000 is 7 digits maximum
    const StartingNumToStringLength = String(num).length
    console.log("Starting Number to String Length", StartingNumToStringLength)

    if(StartingNumToStringLength === 7){

    } else if(StartingNumToStringLength ===6){

    } else if(StartingNumToStringLength === 5){
        
    } else if (StartingNumToStringLength === 4){

    } else if (StartingNumToStringLength === 3){
        // One Hundred Two
        // One Hundred Twenty Two
        // First number needs to be Base10 then next number is 

    } else if (StartingNumToStringLength === 2){
        // Ten to 99
        if(num < 10){
            result += Base10[num]
        } else if ( num < 20 ){
            result += TentoNineteen[num-10]
        } else {
            let isDivisable = num % 10;
            if(isDivisable ===0){
                let temp = num / 10
                result += Tens[temp-2]
            } else {
                let temp = num / 10
                result += String(Tens[temp-2]) + String(Base10[isDivisable])
            }
        }
    } else if (StartingNumToStringLength === 1) {
        result += Base10[num]; 
    } else {
        return undefined; 
    }
    return result; 
};


const result = numberToWords(91)

console.log("result", result)