// https://leetcode.com/problems/merge-two-sorted-lists/description/


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
let dummy = new ListNode(0);
let current = dummy;

while (list1 !== null && list2 !== null) {
if (list1.val < list2.val) {
current.next = list1;
list1 = list1.next;
} else {
current.next = list2;
list2 = list2.next;
}
current = current.next;
}

current.next = list1 || list2; // Attach remaining nodes
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