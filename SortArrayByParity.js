/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let res = [];
    for (el of nums){
        (el%2 === 0)? res.unshift(el): res.push(el);
    }
    return res;
};