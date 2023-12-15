/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0;
    let row = strs.length;
    let col = strs[0].length;

    for(let i=0; i<col;i++){
        for(let j=0; j<row-1; j++){
            if(strs[j][i]>strs[j+1][i]){
                count++;
            break;
            }

        }
    }
    return count;
};