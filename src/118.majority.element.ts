/* 
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

function majorityElement(nums: number[]): number {
  let majIdx = 0;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    console.log(nums[majIdx], nums[i]);
    if (nums[majIdx] !== nums[i]) {
      count--;
    } else {
      count++;
    }
    if (count === 0) {
      majIdx = i;
      count = 1;
    }
  }
  return nums[majIdx];
}

console.log(majorityElement([3, 2, 3]));
