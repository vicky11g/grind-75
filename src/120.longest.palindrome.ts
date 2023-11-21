/* 
Given a string s which consists of lowercase or uppercase letters, 
return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", 
whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
*/

function longestPalindrome(s: string): number {
  if (s.length === 1) return 1;
  let m = {};
  let length = 0;
  let oddLengthMax = 0;
  let addOne = false;
  for (let i = 0; i < s.length; i++) {
    m[s[i]] = m[s[i]] ? m[s[i]] + 1 : 1;
  }
  for (let k of Object.keys(m)) {
    if (m[k] % 2 === 0) {
      length += m[k];
    } else if (m[k] > 1) {
      oddLengthMax += m[k] - 1;
    } else {
      addOne = true;
    }
  }
  oddLengthMax += addOne ? 1 : 0;
  return length + oddLengthMax;
}
console.log(longestPalindrome('abccccdd'));
console.log(longestPalindrome(getInput()));

function getInput() {
  return 'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth';
}
