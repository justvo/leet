/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    let res = [];
    let left = 1;
    let right = 1;
    for (let i = 0; i < n; i++) {
        res[i] = left;
        left *= nums[i];
    }
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    return res
};