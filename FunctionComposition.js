var compose = function(functions) {
	return function(x) {
        for (i = functions.length -1 ;i >= 0; --i){
            x = functions[i](x);
        }
        return x
    }
};
