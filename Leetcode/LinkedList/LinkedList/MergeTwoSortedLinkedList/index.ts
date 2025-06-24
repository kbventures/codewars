// https://leetcode.com/problems/merge-two-sorted-lists/description/


// Pseusdo Code

// Initial Setup
// list1 = [1 → 2 → 4]

// list2 = [1 → 3 → 4]

// Create dummy node: dummy = ListNode(0)

// current = dummy

// Step 1: Compare 1 and 1
// Both are equal, choose list2's 1.

// current.next = list2

// Move list2 = list2.next (now points to 3)

// Move current = current.next (now points to 1)

// Step 2: Compare 1 and 3
// list1.val < list2.val → pick list1's 1.

// current.next = list1

// Move list1 = list1.next (now points to 2)

// Move current = current.next (now points to 1)

// Step 3: Compare 2 and 3
// list1.val < list2.val → pick 2.

// current.next = list1

// Move list1 = list1.next (now points to 4)

// Move current = current.next (now points to 2)

// Step 4: Compare 4 and 3
// list2.val < list1.val → pick 3.

// current.next = list2

// Move list2 = list2.next (now points to 4)

// Move current = current.next (now points to 3)

// Step 5: Compare 4 and 4
// Pick either; let’s pick list1.

// current.next = list1

// Move list1 = list1.next (now null)

// Move current = current.next (now points to 4)

// Step 6: list1 is null
// Attach remaining list2 (which is just 4).

// current.next = list2

// ✅ Result
// Merged list: [1 → 1 → 2 → 3 → 4 → 4]
// Return dummy.next (skips the dummy node).



function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0); // Step 1: Create a dummy node to act as the head
    let current = dummy;         // Step 2: Initialize `current` to keep track of the tail of the merged list

    // Step 3: Merge the lists until one of them becomes null
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) { // Step 4: Compare the current nodes of both lists
            current.next = list1;    // Attach the smaller node to `current.next`
            list1 = list1.next;      // Move the `list1` pointer to the next node
        } else {
            current.next = list2;    // Attach the smaller node to `current.next`
            list2 = list2.next;      // Move the `list2` pointer to the next node
        }
        current = current.next;      // Step 5: Move the `current` pointer to the new last node
    }

    // Step 6: Attach the remaining nodes of whichever list is not exhausted
    current.next = list1 || list2; // If one list is exhausted, the other list will be directly attached

    // Step 7: Return the merged list starting from the node after dummy
    return dummy.next;
}

// Recursion version 
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
// If one of the lists is null, return the other list since there's nothing to merge
if (list1 === null || list2 === null) {
return list1 || list2;
}

// Compare the values of the two list heads and recursively merge the rest of the lists
if (list1.val < list2.val) {
// If the value of the first list head is less,
// link that node to the result of merging the rest of the lists
list1.next = mergeTwoLists(list1.next, list2);
return list1;
} else {
// If the value of the second list head is less or equal,
// link that node to the result of merging the rest of the lists
list2.next = mergeTwoLists(list1, list2.next);
return list2;
}
}