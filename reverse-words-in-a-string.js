var reverseWords = (s) =>  s.split(" ").filter((i)=>i!=="").reverse().join(" ")
//or
/**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseWords = function(s) {
//     let ss = s.split(' ');
//     ss = ss.filter((el)=>el.trim() !=='');
//     return ss.reverse().join(' ').trim()
    
// };