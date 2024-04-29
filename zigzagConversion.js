/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;
    const resArr = new Array(numRows).fill('');
    const slen = s.length;
    let down = true;
    for (let i = 0, row = 0; i < slen; i++) {
        if (down) {
            resArr[row] += s[i];
            row++;

        } else {
            row--;
            resArr[row] += s[i];

        }
        if (row === numRows  ) {
            down = !down;
            row -= 1;
        }
        if (row === 0 ) {
            down = !down;
            row += 1;
        }

    }
    return resArr.join('');
};