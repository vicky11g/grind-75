/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false 
*/

function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;
  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < s.length; i++) {
    const st = s.charAt(i);
    const tt = t.charAt(i);
    if (map1.has(st)) map1.set(st, map1.get(st) + 1);
    else map1.set(st, 1);
    if (map2.has(tt)) map2.set(tt, map2.get(tt) + 1);
    else map2.set(tt, 1);
  }
  // console.log(map1,map2)
  for (const k of map1.keys()) {
    if (map1.get(k) !== map2.get(k)) return false;
  }
  return true;
}

console.log(isAnagram('cat','cat'))
