/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let res1 = [];
    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<arr1.length;j++){
            if(arr2[i] == arr1[j]){
                res1.push(arr1[j]);
                arr1.splice(j,1);
                j--;
            }
        }
    }
    arr1.sort((a, b)=>a-b);
    return [...res1, ...arr1];
};