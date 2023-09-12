/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n===0) return false;
    let res = 0;
    let i = 0;
    while(res < n){
        res = Math.pow(2,i);
        i++;
    }
    return res===n?true:false;
    
    
};