/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {

    const res = num.toString(2).split('');
    for(let i = 0; i<res.length;i++){
        if (res[i]== 0){
            res[i]= 1 ;   
        }else{
            res[i]= 0 ;
        }
    }
    return parseInt(res.join(''), 2);
    
};