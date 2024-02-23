/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let n1 = 1;
    let n2 = n-n1
     while(n1!=n){
         if(n1+n2 === n){
             if(!n1.toString().includes(0)&&!n2.toString().includes(0)){
                 return [n1,n2]
             }
             n1++;
             n2= n-n1
         }
     }
    
};