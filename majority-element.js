/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const freqMap = new Map();
    const n = nums.length;

    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (const [num, freq] of freqMap.entries()) {
        if (freq > n / 2) {
            return num;
        }
    }

    return -1; 
};