namespace DoublyLinkedListNamespace {
  export class Node {
    val: number;
    next: Node | null;
    prev: Node | null;

    constructor(val: number) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }

  export class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;
    size: number;

    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    // Add to the front
    addFront(val: number) {
      const node = new Node(val);
      if (!this.head) {
        this.head = this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this.size++;
    }

    // Add to the end
    addEnd(val: number) {
      const node = new Node(val);
      if (!this.tail) {
        this.head = this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
    }

    // Remove from front
    removeFront(): number | undefined {
      if (!this.head) return undefined;
      const val = this.head.val;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
      this.size--;
      return val;
    }

    // Remove from end
    removeEnd(): number | undefined {
      if (!this.tail) return undefined;
      const val = this.tail.val;
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
      else this.head = null;
      this.size--;
      return val;
    }

    // Peek front
    peekFront(): number | undefined {
      return this.head?.val;
    }

    // Peek end
    peekEnd(): number | undefined {
      return this.tail?.val;
    }

    // Search O(n)
    search(val: number): boolean {
      let current = this.head;
      while (current) {
        if (current.val === val) return true;
        current = current.next;
      }
      return false;
    }

    length(): number {
      return this.size;
    }
  }
}

// Complexity Analysis:
// - Space: O(n) for n nodes.
// - Add/Remove Front/End: O(1) each.
// - Peek Front/End: O(1) each.
// - Search: O(n).