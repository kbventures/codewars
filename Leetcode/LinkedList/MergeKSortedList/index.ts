/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */




// Brute force
// We converty the linked list array into regular arrays, we combined them and then we finally language sort them.
// Time complexity O(n log n) and space complexity O(n)
// class Solution {
//     /**
//      * @param {ListNode[]} lists
//      * @return {ListNode}
//      */
//     mergeKLists(lists) {
//         if(lists.length == 0) return null
//         let temp = []

//         for(let i =0; i < lists.length;i++){
//             if(lists[i].length == 0) continue ; 
//             let tempNode = lists[i]
//             while(tempNode){
//                 temp.push(tempNode.val)
//                 tempNode = tempNode.next
//             }
//         }

//         temp.sort((a,b)=>a-b)

//         let result = new ListNode(0)
//         let dummy = result;

//         temp.forEach(e=>{
//             let currNode = new ListNode(e)
//             dummy.next = currNode;
//             dummy  = currNode; 
//         })

//         return result.next; 
//     }
// }


// V1
// Utilize a function to merge & sort the linkelist this work because they are already sorted. 
// Time complexity O(n) and space complexity O(1)


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */



namespace MergeKSortedListV2 {
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val:number = 0, next:ListNode|null = null){
            this.val = val;
            this.next = next;
        }
    }
export class Solution {


    mergeLists(list1: ListNode, list2: ListNode): ListNode{
        let dummy = new ListNode(0)
        let tail = dummy; 

        while(list1 && list2){
            if(list1.val > list2.val){
                tail.next = list1; 
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            // clean up work
        }
        return dummy.next;
    }
    mergeKLists(lists:ListNode[]) {
        if(lists.length == 0) return null
        if(lists.length == 1) return lists;


        let listsWithoutEmpty:ListNode[] = [];
        // remove empty lists
        for(let i =0; i < lists.length;i++){
            if(!lists[i]) continue ; 
            listsWithoutEmpty.push(lists[i])
        }

        let list1:ListNode = listsWithoutEmpty[0]
        // merge sort all the linkedlist
        for(let i = 1; listsWithoutEmpty.length < i; i++){
            list1 = this.mergeLists(list1, listsWithoutEmpty[i])
        }


        return list1;

    }

}

}


// V2 Optimal Version Utilizing a heap
// class Solution {
//     /**
//      * @param {ListNode[]} lists
//      * @return {ListNode}
//      */


// }


