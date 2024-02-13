/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const l =s.split``.filter(v=>/[a-zA-Z]/.test(v)) 
    const res = []
    for(let i =0; i<s.length;i++){
        if(/[a-zA-Z]/.test(s[i])){
            res.push(l.pop())
        }else{
            res.push(s[i])}
    }
    return res.join``
};