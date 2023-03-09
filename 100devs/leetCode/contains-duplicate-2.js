https://leetcode.com/problems/contains-duplicate-ii/description/

var containsNearbyDuplicate = function (nums, k) {
  let cache = {}
  for (let i = 0; i < nums.length; i++) {
    if (i - cache[nums[i]] <= k) {
      return true;
    }
    cache[nums[i]] = i
  }
  return false;
};
