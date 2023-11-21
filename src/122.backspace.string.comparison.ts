/* 
Given two strings s and t, return true if they are equal when both are t
yped into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/
function backspaceCompare(s: string, t: string): boolean {
  if (s === t) return true;
  const l = Math.max(s.length, t.length);
  const st = [];
  const tt = [];
  for (let i = 0; i < l; i++) {
    if (i < s.length && s[i] !== '#') st.push(s[i]);
    else if (i < s.length) st.pop();

    if (i < t.length && t[i] !== '#') tt.push(t[i]);
    else if (i < t.length) tt.pop();
  }
  console.log(st, tt);
  if (st.length !== tt.length) return false;
  for (let i = 0; i < st.length; i++) if (st[i] !== tt[i]) return false;
  return true;
}
let s = 'bxj##tw';
let t = 'bxo#j##tw';
console.log(backspaceCompare(s, t));

s = 'xywrrmp';
t = 'xywrrmu#p';
console.log(backspaceCompare(s, t));
