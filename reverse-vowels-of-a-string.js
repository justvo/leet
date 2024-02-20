/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const sArr = s.split('');
    const arr= ['a', 'e', 'i', 'o','u','A', 'E', 'I', 'O', 'U']
    const reverse =[];

    for(let char of sArr){
        arr.includes(char)?reverse.push(char):0;
    }
    sArr.forEach((char, index)=>{
        arr.includes(char)?sArr[index]=reverse.pop():0;
    })

    return sArr.join('');
};