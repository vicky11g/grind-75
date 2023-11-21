/* 
Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

function sortedSquares(nums: number[]): number[] {
  let res = new Array(nums.length);
  let start = 0;
  let j = res.length - 1;
  let lastToFill = res.length - 1;
  let startTofill = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[start] < 0) {
      if (Math.abs(nums[start]) > nums[j]) {
        res[lastToFill--] = nums[start] * nums[start];
        start++;
      } else {
        res[lastToFill--] = nums[j] * nums[j];
        j--;
      }
    } else {
      res[startTofill++] = nums[start] * nums[start];
      start++;
    }
  }
  return res;
}
let inputA = [-4, -1, 0, 3, 10];
console.log(sortedSquares(inputA));
