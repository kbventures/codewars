// Definition for a node in a singly-linked list
interface ListNode {
    val: number;
    next: ListNode | null;
}

/**
 * Reverses a singly linked list.
 * @param {ListNode | null} head - The head node of the linked list to be reversed
 * @return {ListNode | null} The new head of the reversed linked list
 */
function reverseList(head: ListNode | null): ListNode | null {
    // Return immediately if the list is empty
    if (head === null) {
        return head;
    }

    // Initialize pointers
    let previousNode: ListNode | null = null; // Previous node in the list
    let currentNode: ListNode | null = head;  // Current node in the list

    // Iterate through the list
    while (currentNode !== null) {
        const nextNode: ListNode | null = currentNode.next; // Next node in the list

        // Reverse the current node's pointer
        currentNode.next = previousNode;

        // Move the previous and current pointers one step forward
        previousNode = currentNode;
        currentNode = nextNode;
    }

    // By the end, previousNode is the new head of the reversed linked list
    return previousNode;
}