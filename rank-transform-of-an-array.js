/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let indexMap = new Map();
    let sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
    sorted.forEach((value, index) => {
        indexMap.set(value, index + 1);
    });
    return arr.map((x) => indexMap.get(x));
};