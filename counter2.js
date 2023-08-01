
var createCounter = function(init) {
    let count = init;
    return  {
        increment:() =>{
            return ++count;
        },
        decrement: () =>{
            return --count;
        },
        reset:() =>{
           return  count = init;
        }
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */