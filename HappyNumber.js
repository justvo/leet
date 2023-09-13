/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let res = 0;
    for(let i of (n+'')){
        res += (i*i);
    }
    return (res === 1 || res === 7)?true:(res <10)?false:isHappy(res);

};