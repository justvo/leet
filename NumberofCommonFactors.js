/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    return new Array(Math.min(a, b) + 1).fill(0)
        .reduce((total, _, i) => total + (a % i == 0 && b % i == 0), 0)
};