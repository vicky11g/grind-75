/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase 
letters and removing all non-alphanumeric characters, it reads the same forward 
and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

function isPalindrome(s: string): boolean {
  const lower = s.toLowerCase();
  let charry = [];
  for (let i = 0; i < lower.length; i++) {
    const c = lower.charCodeAt(i);
    const t = c - 96;
    if ((t <= 26 && t > 0) || (c >= 48 && c <= 57)) {
      charry.push(lower.charAt(i));
      console.log(lower.charAt(i), t);
    }
  }
  console.log('charry', charry);
  for (let i = 0, j = charry.length - 1; i < charry.length, j >= 0; i++, j--) {
    if (i <= j && charry[i] != charry[j]) {
      return false;
    }
  }
  return true;
}
let a = 'A man, a plan, a canal: Panama';
a = '`l;`` 1o1 ??;l`';
console.log(isPalindrome(a));
