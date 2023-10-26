/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let lookup = new Set();

  for (let n of A) {
    if (lookup.has(n)) return n;
    lookup.add(n);
  }

  return -1;

};