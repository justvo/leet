/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    const d = 8 * n + 1;
    const res = Math.floor((-1 + d ** 0.5) / 2);
    return res;

};