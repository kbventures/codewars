class ArrayQueue {
    constructor(){
        this.queue = []
    }
    enqueue(stuff){
            this.queue.push(stuff);
    }


    dequeue(){
        if(this.isEmpty()){
            return undefined
        } else {
            let temp = this.queue.pop()
        return temp
        }
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        } else {
        return this.queue[this.queue.length -1];
        }
    }
    isEmpty(){
        return this.queue.length === 0; 
    }

    size(){
        if(this.isEmpty()){
            return undefined; 
        } else {
            return this.queue.length;
        }
    }
}

let newArrQueue = new ArrayQueue();


newArrQueue.enqueue("x")
newArrQueue.enqueue("z")
newArrQueue.dequeue()

let temp = newArrQueue.size()
console.log(temp)