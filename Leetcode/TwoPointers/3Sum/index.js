// // https://leetcode.com/problems/3sum/

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

// // Brute force
// function threeSum(nums: number[]): number[][] {
//     const res: number[][] = [];
//     const seen = new Set<string>();

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 if (nums[i] + nums[j] + nums[k] === 0) {
//                     const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
//                     const key = triplet.join(",");
//                     if (!seen.has(key)) {
//                         seen.add(key);
//                         res.push(triplet);
//                     }
//                 }
//             }
//         }
//     }

//     return res;
// }




// function threeSum(nums: number[]): number[][] {
//     nums.sort((a, b) => a - b);
//     const res: number[][] = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         let left = i + 1, right = nums.length - 1;

//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right];
//             if (sum === 0) {
//                 res.push([nums[i], nums[left], nums[right]]);
//                 while (left < right && nums[left] === nums[left + 1]) left++;
//                 while (left < right && nums[right] === nums[right - 1]) right--;
//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return res;
// }





// Brute force
// Time Complexity: The three nested loops each iterate through the entire array, resulting in O(n³) time complexity.

// Space Complexity: The space complexity is O(n) due to the seen set that stores unique triplets.


function threeSum(nums: number[]): number[][] {
 const res: number[][] = [];
 const seen = new Set<string>();

 for (let i = 0; i < nums.length; i++) {
 for (let j = i + 1; j < nums.length; j++) {
 for (let k = j + 1; k < nums.length; k++) {
 if (nums[i] + nums[j] + nums[k] === 0) {
 const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
 const key = triplet.join(",");
 if (!seen.has(key)) {
 seen.add(key);
 res.push(triplet);
                    }
                }
            }
        }
    }

 return res;
}



// Two pointer that doens't skip duplicates V1
function threeSum(nums: number[]): number[][] {
 
 // We sort the number in ascening order so we are able to skip duplicates while iterating through the numbers and utilizing a 2 pointer strategy to 
 // to iterate iterate once through the array
 let numsAsc = nums.sort((a,b)=> a-b)
 console.log(numsAsc)
 
 // Utilize set to keep track of unique tripple combinations
 let numSet = new Set()

 let result: number[][]= []


 // We fix the start array to iterate until before the last 2;
 for (let x = 0; x < nums.length -2;x++){
 let mid = x + 1; 
 let end = nums.length -1

 while(mid<end){
 let tempSum = numsAsc[x] + numsAsc[mid] + numsAsc[end]
 if(tempSum > 0){
 end--
        } else if(tempSum < 0){
 mid++
        } else {
 let tempKey = [numsAsc[x], numsAsc[mid], numsAsc[end]].sort().join(',')
 if(numSet.has(tempKey)){
 mid++
            } else {
 numSet.add(tempKey)
 result.push([numsAsc[x], numsAsc[mid], numsAsc[end]])
 mid++
            }
        }
        }


    }

 return result; 
};



// Two Pointers that doesnt skip duplicates v2
function threeSum(nums: number[]): number[][] {
 let numsAsc = nums.sort((a, b) => a - b);
 let set = new Set();
 let result: number[][] = [];

 for (let x = 0; x < nums.length - 2; x++) {
 let mid = x + 1;
 let end = nums.length - 1;

 while (mid < end) {
 let tempSum = numsAsc[x] + numsAsc[mid] + numsAsc[end];
 let tempKey = [numsAsc[x], numsAsc[mid], numsAsc[end]].sort().join(',');

 if (tempSum === 0 && !set.has(tempKey)) {
 result.push([numsAsc[x], numsAsc[mid], numsAsc[end]]);
 set.add(tempKey);
      }

 if (tempSum > 0) {
 end--;
 while (mid < end && numsAsc[end] === numsAsc[end + 1]) end--;
      } else {
 mid++;
 while (mid < end && numsAsc[mid] === numsAsc[mid - 1]) mid++;
      }
    }
  }

 return result;
}

// Optimal

// Time Complexity:
// Sorting the array takes O(n log n).

// The outer loop runs O(n) times.

// The inner while loop (two-pointer approach) runs O(n) for each iteration of the outer loop.

// Overall time complexity: O(n log n) + O(n²) → Simplified to O(n²).

// Space Complexity:
// O(n) for the output array res to store the result triplets.

// O(1) for the extra variables (left, right, sum), which are constant space.

// Overall space complexity: O(n) due to the result array.
function threeSum(nums: number[]): number[][] {
 // Sort the array to easily skip duplicates and use two pointers
 nums.sort((a, b) => a - b);
 const res: number[][] = [];

 // Iterate through the array, fixing one element at a time
 for (let i = 0; i < nums.length - 2; i++) {
 // Skip duplicate values of the fixed element
 if (i > 0 && nums[i] === nums[i - 1]) continue;

 let left = i + 1, right = nums.length - 1;

 // Use two pointers to find pairs that sum to 0
 while (left < right) {
 const sum = nums[i] + nums[left] + nums[right];

 if (sum === 0) {
 // If the sum is 0, add the triplet to the result
 res.push([nums[i], nums[left], nums[right]]);
 
 // Skip duplicates for the left pointer
 while (left < right && nums[left] === nums[left + 1]) left++;
 // Skip duplicates for the right pointer
 while (left < right && nums[right] === nums[right - 1]) right--;
 
 // Move both pointers inward
 left++;
 right--;
            } else if (sum < 0) {
 // If the sum is less than 0, move the left pointer to the right
 left++;
            } else {
 // If the sum is greater than 0, move the right pointer to the left
 right--;
            }
        }
    }

 // Return the result with all unique triplets
 return res;
}