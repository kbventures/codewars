
class StackNode{
    private data : string | number; 
    private next : StackNode | null;
    constructor(data){
        this.data = data;
        this.next = null; 
    }
}

class TsMinStack{
    private top : StackNode | null;
    private size: number;
    private minValue: number;
    constructor(){
        this.top = null;
        this.size = 0;
        this.minValue= 0; 
    }

    push(val:number):void{
        let newStackNode = new StackNode(val)
        newStackNode.next = this.top;
        
    }
    pop():void{
    }

    length(): number{
        return this.size; 
    }

    getMin(): number{
        return this.minValue;
    }


}

/**:
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */