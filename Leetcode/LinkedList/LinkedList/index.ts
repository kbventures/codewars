class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;
  
    constructor(value: T) {
      this.value = value;
    }
  }
  
  class LinkedList<T> {
    head: ListNode<T> | null = null;
  
    append(value: T): void {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current: ListNode<T> | null = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    print(): void {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Usage
  const list = new LinkedList<number>();
  list.append(10);
  list.append(20);
  list.append(30);
  list.print();
  