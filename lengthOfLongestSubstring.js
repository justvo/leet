/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let buff = [];
    const sl = s.length;
    let maxLength = 0;
    for(let  i = 0; i<sl; i++){
        if(!buff.includes(s[i])){
        buff.push(s[i]);
        maxLength = Math.max(maxLength, buff.length);
        }else{
            buff.shift();
            i--;
        }
        if(i === sl-1) break;

    }   
    return maxLength

    
};