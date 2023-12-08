/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let fi = nums.indexOf(1)
    for (i = fi + 1; i < nums.length; i++) {
        if (nums[i] == 1) {
            if (i - fi - 1 >= k) {
                fi = i
            }
            else {
                return false
            }
        }
    }
    return true
};