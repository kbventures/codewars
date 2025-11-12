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


export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export class Solution {
  private mergeLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let tail = dummy;

    while (list1 && list2) {
      if (list1.val < list2.val) {
        tail.next = list1;
        list1 = list1.next;
      } else {
        tail.next = list2;
        list2 = list2.next;
      }
      tail = tail.next;
    }

    tail.next = list1 || list2;
    return dummy.next;
  }

  mergeKLists(lists: (ListNode | null)[]): ListNode | null {
    if (lists.length === 0) return null;

    let list1 = lists[0];
    for (let i = 1; i < lists.length; i++) {
      list1 = this.mergeLists(list1, lists[i]);
    }

    return list1;
  }
}


}


// No namespace
// Time: O(k · N) where k = number of lists, N = total nodes
// More precisely: O(k² · n) if each list has n nodes
// Space: O(1) - only reusing existing nodes, no new allocations (except dummy)
// k² represents how many times you re-process the same nodes as the merged list grows, and n is the number of nodes in each list, so total work is k² · n.

// function mergeLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     let dummy = new ListNode(0);
//     let tail = dummy;

//     while (list1 && list2) {
//       if (list1.val < list2.val) {
//         tail.next = list1;
//         list1 = list1.next;
//       } else {
//         tail.next = list2;
//         list2 = list2.next;
//       }
//       tail = tail.next;
//     }

//     tail.next = list1 || list2;
//     return dummy.next;
//   }

//   function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
//     if (lists.length === 0) return null;

//     let list1 = lists[0];
//     for (let i = 1; i < lists.length; i++) {
//       list1 = mergeLists(list1, lists[i]);
//     }

//     return list1;
//   }



// V2 Optimal Version Utilizing a heap
// class Solution {
//     /**
//      * @param {ListNode[]} lists
//      * @return {ListNode}
//      */


// }



// V3 Min Heap
// Create min-heap, push first node of each non-null list.
// While heap not empty:
// Extract smallest node
// Append to result
// Push its next node (if exists)
namespace MergeKSortedListV3MinHeap {

}


