/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    l = nums.length
    s = 0
    for(i = 0; i < l; i ++){
        s |= nums[i]
    }
    return s * (1<<l-1)
    
};