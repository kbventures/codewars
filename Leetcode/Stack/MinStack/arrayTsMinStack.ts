class ArrayMinStack {

    private minStackArray:number[]
    private minValArray: number[]
    constructor(){
       this.minStackArray = []
       this.minValArray = []
    }

push(val:number):void{
this.minStackArray.push(val)
if(this.minValArray.length == 0){
    this.minValArray.push(val)
} else if(this.minValArray[this.minValArray.length-1] > val){
    this.minValArray.push(val)
}
}

pop():void{
   this.minStackArray.pop()
   this.minValArray.pop() 
}

top():number{
return this.minStackArray[this.minStackArray.length-1]
}

getMin():number{
return this.minValArray[this.minValArray.length-1]
}

}