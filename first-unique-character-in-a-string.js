/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let s_map = {}
    for(let a of s){
        s_map[a] = (s_map[a]||0)+1;
    }
    for (let i = 0; i<s.length; i++){
        if(s_map[s[i]]===1){
            return i
        }
    }
    return -1;
};