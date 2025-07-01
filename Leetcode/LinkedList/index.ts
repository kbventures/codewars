// Typescript linkelist implementation

class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null = null; 
  constructor(value: T){
    this.value = value; 
    this.next = null 
  }
}

class LinkedListTypescript<T>{
    size: number;
    start: LinkedListNode<T> | null = null; 
  constructor(){
    this.size =0; 
    this.start = null; 
  }
  append(val: T){
    const newNode = new LinkedListNode(val)
    if(this.start == null){
      this.start = newNode; 
    } else {
      let currNode: LinkedListNode<T> = this.start;  
      while(currNode.next !== null){
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
    this.size++ 
  }
}

































// class ListNode<T> {
//     value: T;
//     next: ListNode<T> | null = null;
  
//     constructor(value: T) {
//       this.value = value;
//     }
//   }
  
//   class LinkedList<T> {
//     head: ListNode<T> | null = null;
  
//     append(value: T): void {
//       const newNode = new ListNode(value);
//       if (!this.head) {
//         this.head = newNode;
//         return;
//       }
//       let current: ListNode<T> | null = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
  
//     print(): void {
//       let current = this.head;
//       while (current) {
//         console.log(current.value);
//         current = current.next;
//       }
//     }
//   }
  
//   // Usage
//   const list = new LinkedList<number>();
//   list.append(10);
//   list.append(20);
//   list.append(30);
//   list.print();
  