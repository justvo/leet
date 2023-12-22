/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    const binaryString = (n>>>0).toString(2);
    let output = 0;
    let start;
    for(let i=0; i<binaryString.length;i++){
        if(binaryString[i]==="1"){
            output = Math.max(output, start !== undefined? (i-start):0);
            start = i;
        }
    }
    return output
};