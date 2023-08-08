
var flat = function (arr, n) {
    const res = [];

    function help(arr, k){
        for (val of arr){
            if(typeof(val)==='object' && k < n ){
                help(val, k+1 )
            }else{
                res.push(val);
            }
        } 
        return res;
    }
    return help(arr,0);
};