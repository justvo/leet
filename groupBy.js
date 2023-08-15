/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let res = {};
    for(obj of this){
        let key = fn(obj);
        if(!res.hasOwnProperty(key)){
            res[key] = [];
        }
        res[key].push(obj);
    }
    return res;
    
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */