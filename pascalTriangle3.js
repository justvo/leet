/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1];
    let res = [1];
    let prev = 1;
    for (let i = 1; i <= rowIndex; i++) {
        let nextVal = prev * (rowIndex - i + 1) / i;
        res.push(nextVal);
        prev = nextVal
    }
    return res;


};