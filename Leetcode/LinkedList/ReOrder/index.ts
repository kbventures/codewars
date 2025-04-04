
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function reorderList(head: ListNode | null): void {
    // If the list is empty or has just one node, nothing to reorder
    if (head == null || head.next == null) return;

    let currentNode: ListNode | null = head;
    let currentPosition = 0;  // This keeps track of the current position in the list

    // Traverse the list and reorder nodes based on position
    while (currentNode != null) {
        let isSecondNode = currentPosition % 2 !== 0;  // true for 1st, 3rd, 5th, ... (odd positions)
        
        // Logic to reorder based on position
        if (isSecondNode) {
            // Perform the action for every second node (reordering logic here)
            console.log(`Processing second node at position ${currentPosition}:`, currentNode.val);
        } else {
            // Perform action for every first node (or other logic)
            console.log(`Processing first node at position ${currentPosition}:`, currentNode.val);
        }

        // Move to the next node in the list
        currentNode = currentNode.next;
        currentPosition++;
    }
}
