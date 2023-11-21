/* 
You are given an array of non-overlapping intervals intervals where 
intervals[i] = [starti, endi] represent the start and the end of the 
ith interval and intervals is sorted in ascending order by starti. 
You are also given an interval newInterval = [start, end] that represents 
the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted 
in ascending order by starti and intervals still does not have any 
overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because 
the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

function insert(interval: number[][], ni: number[]): number[][] {
  if (ni.length === 0) return [];
  if (interval.length === 0) return [ni];
  const res = [];
  const inval = [Number.MAX_SAFE_INTEGER, -1];
  let pushed = false,
    isOverlapping = false;
  for (const i of interval) {
    if (belongsTo(ni[0], i) && belongsTo(ni[1], i)) return interval;
    if (belongsTo(i[0], ni) || belongsTo(i[1], ni)) {
      inval[0] = Math.min(inval[0], i[0], ni[0]);
      inval[1] = Math.max(inval[1], i[1], ni[1]);
      isOverlapping = true;
    }
  }
  for (const i of interval) {
    if (
      !pushed &&
      ((isOverlapping && i[0] >= inval[0]) || (!isOverlapping && i[0] >= ni[0]))
    ) {
      res.push(isOverlapping ? inval : ni);
      if(!isOverlapping)res.push(i);
      pushed = true;
    } else if (!belongsTo(i[0], ni) && !belongsTo(i[1], ni)) {
      res.push(i);
    }
  }
  if (!isOverlapping && !pushed) res.push(ni);
  return res;
}
function belongsTo(p, arr) {
  return arr[0] <= p && arr[1] >= p;
}
let intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
let newInterval = [4, 8];
console.log(insert(intervals, newInterval));
intervals = [
  [1, 3],
  [6, 9],
];
newInterval = [2, 5];
console.log(insert(intervals, newInterval));
intervals = [[1, 5]];
newInterval = [7, 8];
console.log(insert(intervals, newInterval));