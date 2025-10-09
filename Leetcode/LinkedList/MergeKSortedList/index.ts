/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length == 0) return null
        let temp = []

        for(let i =0; i < lists.length;i++){
            if(lists[i].length == 0) continue ; 
            let tempNode = lists[i]
            while(tempNode){
                temp.push(tempNode.val)
                tempNode = tempNode.next
            }
        }

        temp.sort()

        let result = new ListNode(0)
        let dummy = result;

        temp.forEach(e=>{
            let currNode = new ListNode(e)
            dummy.next = currNode;
            dummy  = currNode; 
        })

        return result.next; 
    }
}