// Time complexity of O(n) because we go through the array once and space complexity of O(n) before worst case scenario we add all the
// opening brakets to the array once
function isValid(s: string): boolean {
    // Edge Case
    if(s.length == 1) return false; 
    let open:string[] = ['(','[','{' ]
    let close:string[] = [')', ']', '}']
    let arrayQueue: string[] = []

    for(let i = 0; i < s.length; i++){
        // Last In First Out(Stack has indicated in the hint)
        if(open.includes(s[i])){
            arrayQueue.push(s[i])
        } else {
            // Invalid parenthese array
            if(open.indexOf(arrayQueue[arrayQueue.length -1]) == close.indexOf(s[i]) ){
                arrayQueue.pop()
            } else {
                return false;
            }
        }
    }

    // Valid parentheses array
    return arrayQueue.length > 0 ? false : true
};

