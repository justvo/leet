/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let res = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[res] !== nums[i] ){
            res++;
            nums[res] = nums[i];
        }
    }
    return res + 1;
};