/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    return [...String(n)].reduce((sum, num, idx) => {
        return sum + (idx % 2 === 0 ? Number(num) : -Number(num));
    }, 0);
};