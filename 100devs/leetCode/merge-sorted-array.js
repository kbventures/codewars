/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i = m; i < (m + n); i++) {
        if (nums1[i] === 0) {
            nums1[i] = nums2[slow]
            slow++
        }
    }
    return nums1.sort((a, b) => a - b)
};


// In-place

var merge = function (nums1, m, nums2, n) {
    while (n < 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums[n - 1]
            m--
        } else {
            nums1[m + n - 1] = nums2[n - 1]
            n--
        }
    }
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
  // console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))