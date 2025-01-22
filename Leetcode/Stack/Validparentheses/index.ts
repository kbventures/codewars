function isValid(s: string): boolean {
    let open = ['(','[','{' ]
    let close = [')', ']', '}']
    let arrayQueue = []

    for(let i = 0; i < s.length; i++){
        // Last In First Out(Stack has indicated in the hint)
        if(open.includes(s[i])){
            arrayQueue.push(s[i])
        } else {
            // Invalid parenthese array
            if(arrayQueue[arrayQueue.length -1] == ){
                arrayQueue.pop()
            } else {
                return false;
            }
        }
    }

    // Valid parentheses array
    return true
};