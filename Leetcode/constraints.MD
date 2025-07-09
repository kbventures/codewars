LeetCode Constraints Cheat Sheet:
n ≤ 10² → O(n²) okay

n ≤ 10³ → O(n²) risky, prefer O(n log n)

n ≤ 10⁴ → O(n log n) safe, O(n²) slow

n ≤ 10⁵ → O(n log n) or O(n) only

n > 10⁶ → O(n) or better only

Use constraints to pick fastest algorithm possible. If unsure, pick O(n log n) for 10⁴-10⁵ inputs.
