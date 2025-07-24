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
// Brute Force
// Time complexity is O(n) and space complexity is O(n)
function hasCycle(head: ListNode | null): boolean {
    
    let nodeMap = new Map()
    let iteratingDummy = head;

    while(iteratingDummy){
        if(nodeMap.has(iteratingDummy)) return true; 
        nodeMap.set(iteratingDummy,true)
        iteratingDummy = iteratingDummy.next
    }

    return false; 
};