/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function(n) {
    let set = new Set();
    let count = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 1 && !set.has(j)) {
                count++;
                set.add(j);
            }
        }
    }
    return count;
};