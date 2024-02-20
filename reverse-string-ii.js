/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = s.split('')
    for (let i=1; i<s.length;i+=2*k){
        let jPointer = (i+k-2);
        let iPointer = i-1;
        while(jPointer>iPointer){
            let c =arr[iPointer];
            arr[iPointer++]=arr[jPointer];
            arr[jPointer--]=c
        } 
    }
    return arr.join('')
};