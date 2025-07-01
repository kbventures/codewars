class Node {
    constructor(value){
        this.value = value; 
        this.next = null; 
    }
}

class LinkedList {
    constructor(){
        this.size = 0;
        this.start = null; 
    }


    append(val){
        const newNode = new Node(val)
        if(this.start == null){
            this.start = newNode; 
            this.start.next = null; 
        } else {
            let currNode = this.start
            while (currNode.next !== null) {
                currNode = currNode.next
            }
            currNode.next = newNode; 
        }
        this.size++
    }

}

const newLinkedList = new LinkedList()

newLinkedList.append("1")
newLinkedList.append("2")
newLinkedList.append("3")
console.log(newLinkedList)