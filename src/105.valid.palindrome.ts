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
