/* 
Write a function to find the longest common prefix string amongst an array 
of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

function longestCommonPrefix(strs: string[]): string {
  let prefixLength = strs[0].length;
  let m = {};
  for (let i = 0; i < prefixLength; i++) {
    // m[strs[0][i]] = m[strs[0][i]] ? m[strs[0][i]] + 1 : 1;
    m[`${strs[0][i]}_${i}`] = m[strs[0][i]] ? m[strs[0][i]] + 1 : 1;
  }
  // console.log(m)
  for (let j = 1; j < strs.length; j++) {
    const s = strs[j];
    for (let i = 0; i <= prefixLength; i++) {
      if (i === 0 && !m[`${s[i]}_${i}`]) return '';
      if (!m[`${s[i]}_${i}`]) prefixLength = i;
    }
  }
  return strs[0].substring(0, prefixLength);
}
let strList = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strList));
strList = ['dog', 'racecar', 'car'];
console.log(longestCommonPrefix(strList));
strList = ['flower', 'flower', 'flower', 'flower'];
console.log(longestCommonPrefix(strList));
