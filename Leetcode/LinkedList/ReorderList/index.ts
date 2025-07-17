


  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
 }
 // Space complexity is O(1) and spacd compexity is O(n)
function reorderList(head: ListNode | null): void {
    // 0. Hedge case
    if (!head || !head.next) return;

    // 1. Count nodes
    let count = 0;
    let node: ListNode | null = head;
    while (node) {
        count++;
        node = node.next;
    }

    // 2. Get to the node just before the second half
    let mid = Math.floor((count + 1) / 2);
    let prevMid = head;
    for (let i = 1; i < mid; i++) {
        prevMid = prevMid!.next!;
    }

    // 3. Reverse the second half
    let second = prevMid!.next;
    prevMid!.next = null; // cut the first half

    let prev:ListNode | null = null;
    while (second) {
        let next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }

    // 4. Merge first half and reversed second half
    let first = head;
    second = prev; // prev is head of reversed second half

    while (first && second) {
        let tmp1 = first.next;
        let tmp2 = second.next;

        first.next = second;
        second.next = tmp1;

        first = tmp1!;
        second = tmp2;
    }
}