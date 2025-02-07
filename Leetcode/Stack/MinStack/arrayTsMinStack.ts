class ArrayMinStack {

    private minStackArray:number[]
    private minVal: number | null; 
    constructor(){
       this.minStackArray = []
       this.minVal = null; 
    }

push(val:number):void{
this.minStackArray.push(val)
if(this.minVal == null){
    this.minVal=val;
} else if(this.minVal > val){
    this.minVal = val; 
}
}
// Needs work to check if the curren min should remain 
pop():void{
   this.minStackArray.pop()
this.minVal = Math.min(...this.minStackArray); 
}

top():number{
return this.minStackArray[this.minStackArray.length-1]
}

getMin(): number | null {
    if (this.minVal === null) {
        return null; // Ensure it always returns a value
    }
    return this.minVal;
}



}

// ["MinStack","push","push","push","getMin","top","pop","getMin"]
// [[],[-2],[0],[-1],[],[],[],[]]

const test = new ArrayMinStack()
test.push(-2)
console.log(test)
test.push(0)
console.log(test)
test.push(-1)
console.log(test)
console.log(test.getMin())
console.log(test.top())
console.log(test.pop())
console.log(test)
console.log(test.getMin())
// ["MinStack","push","push","push","getMin","top","pop","getMin"]
// [[],[-2],[0],[-1],[],[],[],[]]
