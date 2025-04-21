// Prefix/Suffix Sums in 10 Seconds:
// Prefix Sum = Running total left-to-right.

// [3, 1, 2] → [3, 4, 6].

// Use: Instantly get sum of first N elements.

// Suffix Sum = Running total right-to-left.

// [3, 1, 2] → [6, 3, 2].

// Use: Instantly get sum of last N elements.

// Step 1: First Loop (Left-to-Right) — Compute Prefix Products
// State: arr = [0,0,0,0], prefix = 1

// i=0:
// ] = prefix → arr = [1, 1, 2, 0]

// Update prefix = 2 * 3 = 6

// i=3:

// arr[3] = prefix → arr = [1, 1, 2, 6]

// Update prefix = 6 * 4 = 24 (ignored, loop ends)

// After First Loop: arr = [1, 1, 2, 6]

// Step 2: Second Loop (Right-to-Left) — Compute Suffix Products & Final Answer
// State: arr = [1,1,2,6], suffix = 1

// y=3:

// arr[3] = suffix * arr[3] → 6 * 1 = 6 → arr = [1,1,2,6]

// Update suffix = 1 * 4 = 4

// y=2:

// arr[2] = suffix * arr[2] → 2 * 4 = 8 → arr = [1,1,8,6]

// Update suffix = 4 * 3 = 12

// y=1:

// arr[1] = suffix * arr[1] → 1 * 12 = 12 → arr = [1,12,8,6]

// Update suffix = 12 * 2 = 24

// y=0:

// arr[0] = suffix * arr[0] → 1 * 24 = 24 → arr = [24,12,8,6]

// Update suffix = 24 * 1 = 24 (ignored, loop ends)

// Final Output: [24, 12, 8, 6]

// arr[1] = prefix → arr = [1, 1, 0, 0]

// Update prefix = 1 * 2 = 2

// i=2:

// arr[2] = prefix → arr = [1, 1, 2, 0]

// Update prefix = 2 * 3 = 6

// i=3:

// arr[3] = prefix → arr = [1, 1, 2, 6]

// Update prefix = 6 * 4 = 24 (ignored, loop ends)

// After First Loop: arr = [1, 1, 2, 6]

// Step 2: Second Loop (Right-to-Left) — Compute Suffix Products & Final Answer
// State: arr = [1,1,2,6], suffix = 1

// y=3:

// arr[3] = suffix * arr[3] → 6 * 1 = 6 → arr = [1,1,2,6]

// Update suffix = 1 * 4 = 4

// y=2:

// arr[2] = suffix * arr[2] → 2 * 4 = 8 → arr = [1,1,8,6]

// Update suffix = 4 * 3 = 12

// y=1:

// arr[1] = suffix * arr[1] → 1 * 12 = 12 → arr = [1,12,8,6]

// Update suffix = 12 * 2 = 24

// y=0:

// arr[0] = suffix * arr[0] → 1 * 24 = 24 → arr = [24,12,8,6]

// Update suffix = 24 * 1 = 24 (ignored, loop ends)

// Final Output: [24, 12, 8, 6]