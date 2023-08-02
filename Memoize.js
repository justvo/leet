function memoize(fn) {
    let cash = {}; 
    return function(...args) {
        let arg = JSON.stringify(args);
        if(arg in cash){ 
            return cash[arg];
        }
        else {
            cash[arg] = fn(...args);
            return cash[arg]
        }
        
    }
}