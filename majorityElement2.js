/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const count = new Map();
    const n = Math.floor(nums.length / 3);
    const ans = [];

    // Count the frequencies of elements in the input array.
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    // Iterate through the map to find majority elements.
    for (const [num, freq] of count.entries()) {
        if (freq > n) {
            ans.push(num);
        }
    }

    return ans;
};