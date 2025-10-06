// LRU cache

// Time complexity is O(n) and space complexity is O(n)

class LRUCache {
    lruCache:number[][];
    capacity:number;

    constructor(capacity =1) {
        this.capacity = capacity;
        this.lruCache = []
    }

    get(key: number): number {

        let keyValue = -1; 
        if(this.lruCache.length == 0) return keyValue;
    
        // Check if key exists and if not return -1
        for(let i = 0; i < this.lruCache.length;i++){
            if(this.lruCache[i][0] == key){
                keyValue = this.lruCache[i][1];

                if(this.lruCache.length == 1){
                    break;
                }
                // since value is found we need to update the LRU
                let add = this.lruCache[i]
                let start = this.lruCache.slice(0,i)
                let end = this.lruCache.slice(i+1)
                let temp:number[][] = start.concat(end)
                temp.push(add)
                this.lruCache = temp; 
                break;
            }
        }

        return keyValue;        
    }

    // Update the value of the key if the key exists
    put(key: number, value: number): void {
        // If value exists simply update it 
        for(let i = 0; i < this.lruCache.length; i++){
            if(this.lruCache[i][0] == key){
                        this.lruCache[i][1] = value; 
                        // since value is found we need to update the LRU
                        let add = this.lruCache[i]
                        let start = this.lruCache.slice(0,i)
                        let end = this.lruCache.slice(i+1)
                        let temp:number[][] = start.concat(end)
                        temp.push(add)
                        this.lruCache = temp;
                        return;
            }
        }

        if(this.lruCache.length < this.capacity){
            this.lruCache.push([key,value])
            return;
        }
        this.lruCache.shift()
        this.lruCache.push([key,value]);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


// let obj = new LRUCache(2)

// obj.put(1,1)
// console.log(obj.lruCache)
// obj.put(2,2)
// console.log(obj.lruCache)
// const getOne = obj.get(1)
// console.log(obj.lruCache)
// console.log(getOne);
// obj.put(3,3)
// console.log(obj.lruCache)
// const getTwo = obj.get(2)
// console.log(getTwo);
// obj.put(4,4);
// console.log(obj.lruCache)
// const getOneAgain =obj.get(1);
// console.log(getOneAgain)
// const getThree =obj.get(3);
// console.log(getThree)
// console.log(obj.lruCache)
// const getFour = obj.get(4)
// console.log(getFour)
// console.log(obj.lruCache)

//["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]


// ["LRUCache","put","put","get","put","put","get"]
// [[2],[2,1],[2,2],[2],[1,1],[4,1],[2]]

let obj = new LRUCache(2)

obj.put(2,1)
console.log(obj.lruCache)
obj.put(2,2)
console.log(obj.lruCache)
const getTwo = obj.get(2)
console.log(obj.lruCache)
console.log(getTwo);
obj.put(1,1)
console.log(obj.lruCache)
obj.put(4,1)
console.log(obj.lruCache)
const getTwoAgain = obj.get(2)
console.log(getTwoAgain);


// Space complexity: O(capacity)
// Time complexity: O(1) for get and put in worst case
// class DLinkedNode {
//     key: number;
//     value: number;
//     prev: DLinkedNode | null = null;
//     next: DLinkedNode | null = null;

//     constructor(key?: number, value?: number) {
//         this.key = key ?? 0;
//         this.value = value ?? 0;
//     }
// }

// class LRUCache {
//     private capacity: number;
//     private cache: Map<number, DLinkedNode>;
//     private head: DLinkedNode;
//     private tail: DLinkedNode;

//     constructor(capacity: number) {
//         this.capacity = capacity;
//         this.cache = new Map();

//         this.head = new DLinkedNode();
//         this.tail = new DLinkedNode();
//         this.head.next = this.tail;
//         this.tail.prev = this.head;
//     }

//     private addNode(node: DLinkedNode) {
//         // always add right after head
//         node.prev = this.head;
//         node.next = this.head.next;
//         this.head.next!.prev = node;
//         this.head.next = node;
//     }

//     private removeNode(node: DLinkedNode) {
//         const prev = node.prev!;
//         const next = node.next!;
//         prev.next = next;
//         next.prev = prev;
//     }

//     private moveToHead(node: DLinkedNode) {
//         this.removeNode(node);
//         this.addNode(node);
//     }

//     private popTail(): DLinkedNode {
//         const res = this.tail.prev!;
//         this.removeNode(res);
//         return res;
//     }

//     get(key: number): number {
//         const node = this.cache.get(key);
//         if (!node) return -1;
//         this.moveToHead(node);
//         return node.value;
//     }

//     put(key: number, value: number): void {
//         let node = this.cache.get(key);
//         if (node) {
//             node.value = value;
//             this.moveToHead(node);
//         } else {
//             node = new DLinkedNode(key, value);
//             this.cache.set(key, node);
//             this.addNode(node);

//             if (this.cache.size > this.capacity) {
//                 const tail = this.popTail();
//                 this.cache.delete(tail.key);
//             }
//         }
//     }
// }


// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */


