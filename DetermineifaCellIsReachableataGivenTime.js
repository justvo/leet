/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    const minStep = Math.max(Math.abs(sx-fx),Math.abs(sy-fy));
    if(minStep===0){
        return t !==1;
    }
    return minStep<=t;
};