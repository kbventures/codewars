Heap Basics
Understand binary heap properties:

Complete binary tree
A complete binary tree is a binary tree where all levels are fully filled except possibly the last, which is filled from left to right with no gaps.

Min-heap: parent ≤ children

Max-heap: parent ≥ children

Array Representation
For node at index i:

Left child: 2i + 1

Right child: 2i + 2

Parent: Math.floor((i - 1) / 2)

3. Insert & Sift-Up
   ✅ 703. Kth Largest Element in a Stream (insert & maintain heap)
   ✅ 295. Find Median from Data Stream (uses two heaps, advanced insert logic)

4. Remove/Extract Min (or Max)
   ✅ 1046. Last Stone Weight (removal + max-heap)
   ✅ 1337. The K Weakest Rows in a Matrix (min-heap of scores)

5. Heapify (Build Heap)
   ✅ 347. Top K Frequent Elements (heapify frequency map)
   ✅ 215. Kth Largest Element in an Array (build heap from array)

6. Heap Sort
   ✅ 912. Sort an Array (implement heap sort manually)

7. Priority Queue
   ✅ 621. Task Scheduler
   ✅ 502. IPO

8. Advanced Operations
   ✅ 373. Find K Pairs with Smallest Sums (min-heap + pointer simulation)
   ✅ 264. Ugly Number II (min-heap with deduplication)

9. Use in Problems
   ✅ 239. Sliding Window Maximum
   ✅ 295. Find Median from Data Stream
   ✅ 973. K Closest Points to Origin
