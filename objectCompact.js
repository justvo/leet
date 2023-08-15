/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
    if(typeof(obj) !=='object'||obj ===null){
        return obj;
    }
     
     if(obj instanceof Array){
         const res = [];

        for (el of obj){
            
            let val = compactObject(el);
            if(val){
                res.push(val);
            }
        } 
        return res;
     }else{
         const res = {};
        for (let k in obj){
            
            const val =    compactObject(obj[k]);
            if(val){
            res[k]= val;
            }
            

        }
        return res;
     }
};