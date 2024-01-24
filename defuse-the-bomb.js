/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    let res = new Array(code.length).fill(-1);
    if (k > 0) {
        for (let i = 0; i < code.length; i++) {
            let sum = 0;
            for (let j = i + 1; j <= k + i; j++) {
                sum += code[j % code.length]
            }
            res[i] = sum
        }
    } else if (k < 0) {
        for (let i = 0; i < code.length; i++) {
            let sum = 0;
            let j = i;
            while (j < i + Math.abs(k)) {
                sum += code[j % code.length]
                j++;
            }
            res[j % code.length] = sum;
        }
    } else {
        for (let i = 0; i < code.length; i++) {
            res[i] = k;
        }
    }
    return res
};