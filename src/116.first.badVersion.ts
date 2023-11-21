/* 
You are a product manager and currently leading a team to develop a new product. 
Unfortunately, the latest version of your product fails the quality check. 
Since each version is developed based on the previous version, all the 
versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first 
bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version 
is bad. Implement a function to find the first bad version. You should minimize 
the number of calls to the API.

Example 1:
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:
Input: n = 1, bad = 1
Output: 1
*/

let f = v => {
  return i => {
    return v <= i;
  };
};

var solution = function(isBadVersion: any) {
  return function(n: number): number {
    const p = Math.ceil(n * 0.09);
    let count = p;
    while (true) {
      // console.log(count,p)
      if (isBadVersion(count)) {
        if (p === 1) return count;
        let i = count - p;
        while (i <= count) {
          if (isBadVersion(i)) {
            console.log(i);
            return i;
          }
          i++;
        }
      }
      if(count+p > n) break;
      count += p;
    }
    while(count <= n) {
      if (isBadVersion(count)) {
        console.log(count);
        return count;
      }count++;
    }
    return n;
  };
};
let isBadVersion = f(4);
// console.log('Result:', solution(isBadVersion)(5));
isBadVersion = f(2147483644);
console.log('Result:', solution(isBadVersion)(2147483647));
