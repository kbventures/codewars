/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Time complexity  is O(n) and space complexity is O(1)
function removeElements(head: ListNode | null, val: number): ListNode | null {
    let dummy = new ListNode(0)
    dummy.next = head; 
    let previous = dummy; 

    while(head){
        if(head.val === val){
            previous.next = head.next
        } else {
            previous = head; 
        }
        head = head.next
    }


    return dummy.next; 
};

