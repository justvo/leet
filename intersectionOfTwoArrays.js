/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	const set = new Set(nums1);
	let result = new Set();
	for(let i =0;i<nums2.length;i++){
		if(set.has(nums2[i])) result.add(nums2[i])
	}
    return Array.from(result);
};