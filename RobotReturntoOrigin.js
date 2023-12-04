/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(str) {
    let horizontal = 0;
    let vertical = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'L') ++horizontal;
        if (str[i] === 'R') --horizontal;
        if (str[i] === 'U') ++vertical;
        if (str[i] === 'D') --vertical;
    }

    return horizontal === 0 && vertical === 0
    
};