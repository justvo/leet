/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    res = [];
    buf = [];
    for(let i = 0;i < arr.length; i++){
        buf.push(arr[i]);
        if(buf.length == size ){
            res.push(buf);
            buf =[];
        }
    }
    if(buf.length){
        res.push(buf);
    }
    return res;
};