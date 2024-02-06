/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {

    let keyboard = {
        1:'qwertyuiop',
        2:"asdfghjkl",
        3:"zxcvbnm",
    }
    const res = [];
    let i = 0, rowIndx = 1;
    while(i<words.length){
        if(words[i].toLowerCase().split('').every((char)=>keyboard[rowIndx].includes(char))){
            res.push(words[i]);
            i++
            rowIndx = 1;
        }else{
            if(rowIndx ===3){
                i++;
                rowIndx = 1;
            }
            else{
                rowIndx++
            }
        }

    }
    return res
};

