/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    sarr = s.toLowerCase().split('').sort();
    tarr = t.toLowerCase().split('').sort();
    if(sarr.length !== tarr.length ){
        return false;
    }

    for(let i = 0; i<sarr.length;i++){
        if(tarr[i] !== sarr[i]){
            return false;
        }
    }
    return true;

};