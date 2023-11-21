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
