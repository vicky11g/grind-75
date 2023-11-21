/* 
Given two strings ransomNote and magazine, return true if ransomNote 
can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
  const al = new Array(26).fill(0);
  [...magazine].forEach(i => (al[i.charCodeAt(0) - 'a'.charCodeAt(0)] += 1));
  console.log(al);
  for (const i of [...ransomNote]) {
    const c = i.charCodeAt(0) - 'a'.charCodeAt(0);
    if (!al[c]) return false;
    al[c] -= 1;
  }
  return true;
}

console.log(canConstruct('aa', 'aba'));
