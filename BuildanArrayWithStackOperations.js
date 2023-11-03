/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const res = [];
    let current =1;

    for (let i=0;i<target.length;i++){
        while(current<target[i]){
            res.push("Push");
            res.push("Pop");
            current++;
        }
        res.push("Push");
        current++;
    }
    return res;
};