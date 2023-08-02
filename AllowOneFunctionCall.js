var once = function(fn) {
    let count = 1;
        return function(...args){
            if (count) {
                count = 0;
                return fn(...args);
                }
            else return undefined
    }
};
