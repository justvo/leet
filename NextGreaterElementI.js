/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (a, b) {
let res = new Array(a.length).fill(-1);

  for (let i = 0; i < a.length; i++) {
    let rig;
    let jIndex = b.indexOf(a[i]) + 1;

    for (let j = jIndex; j < b.length; j++) {
      if (b[j] > a[i]) {
        rig = b[j];
        break;
      }
    }

    res[i] = rig ? rig : res[i];
  }
  return res;

};